import json

import logging

from datahub.emitter.rest_emitter import DatahubRestEmitter
from datahub.emitter.serialization_helper import pre_json_transform

from datahub.metadata.schema_classes import (
    ChangeTypeClass,
    GenericAspectClass,
    MetadataChangeProposalClass,
)

logging.basicConfig(level=0)
logger = logging.getLogger(__name__)



autorender_aspect = {
    "singlestring": "singlestring",
    "arrayofstrings": ["stringone","stringtwo"],
    "singleboolean": True,
    "arrayofbooleans": [True,True,False],
    "singleint": 42,
    "arrayofints": [42,43,44],
    "singlelong": 1000000000000000,
    "arrayoflongs": [1000000000000000],
    "singlefloat" : 42.0,
    "arrayoffloats": [42.0, 42.1, 42.2],
    "singledouble": 42.00000000000001,
    "arrayofdoubles": [42.00000000000001],
    "singleurn": "urn:li:dataset:(urn:li:dataPlatform:dsh,prod-lz-dsh.internal.shop-order,PROD)",
    "singleenum" : "CONSUMERMARKET",
    "arrayofenums": ["BUSINESSMARKET", "SMALL"]
}

emitter: DatahubRestEmitter = DatahubRestEmitter(gms_server="http://localhost:8080")

shoporders_urn = "urn:li:dataset:(urn:li:dataPlatform:dsh,prod-lz-dsh.internal.shop-order,PROD)"
cdr_month_aggr_data = "urn:li:dataset:(urn:li:dataPlatform:dsh,prod-lz-dsh.internal.month-aggr-cdr-data,PROD)"
cdr_month_aggr_sms = "urn:li:dataset:(urn:li:dataPlatform:dsh,prod-lz-dsh.internal.month-aggr-cdr-sms,PROD)"


def mkMCP(dataset_urn: str):
    mcp_raw: MetadataChangeProposalClass = MetadataChangeProposalClass(
        entityType="dataset",
        entityUrn=dataset_urn,
        changeType=ChangeTypeClass.UPSERT,
        aspectName="autoRenderFields2",
        aspect=GenericAspectClass(
            contentType="application/json",
            value=json.dumps(autorender_aspect).encode("utf-8"),
        ),
    )
    return mcp_raw

for dataset in [shoporders_urn,
                # cdr_month_aggr_data, 
                #cdr_month_aggr_sms
                ]:
    try:
        mcp = mkMCP(dataset)

        #debugging
        mcp_obj = pre_json_transform(mcp.to_obj())
        payload = json.dumps({"proposal": mcp_obj})
        logger.info(f"{payload}")

        emitter.emit(mcp)
        print("Successfully wrote to DataHub")
    except Exception as e:
        print("Failed to write to DataHub")
        raise e


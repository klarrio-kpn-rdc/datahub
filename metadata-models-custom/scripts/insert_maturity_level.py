import json

import logging

from datahub.emitter.rest_emitter import DatahubRestEmitter
from datahub.emitter.serialization_helper import pre_json_transform
from datahub.metadata.schema_classes import (
    ChangeTypeClass,
    GenericAspectClass,
    MetadataChangeProposalClass,
)



logger = logging.getLogger(__name__)
logging.basicConfig(level=0)
#logger.setLevel(logging.INFO)
emitterlogger = logging.getLogger("datahub.emitter.rest_emitter")
emitterlogger.setLevel(logging.DEBUG)

maturity_aspect = {
    "reviewed" : "MATURITY_TWO",
    #"selfdeclared": "MATURITY_THREE"
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
        aspectName="hasMaturityLevel",
        aspect=GenericAspectClass(
            contentType="application/json",
            value=json.dumps(maturity_aspect).encode("utf-8"),
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

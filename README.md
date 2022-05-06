# Eventuous Connector

## Sidecar sample for Elasticsearch

The sidecar is a gRPC bidirectional streaming server. It receives events from the connector and sends Elastic updates back. The connector will take care about:
- Subscribing to EventStoreDB
- Pushing events to the sidecar
- Receiving Elastic operations from the sidecar (index, update, etc)
- Executing Elastic operations
- Storing the checkpoint in the `checkpoints` index

The index name is defined in the connector configuration.

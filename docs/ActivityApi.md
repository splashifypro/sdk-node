# ActivityApi

All URIs are relative to *https://apis.splashifypro.com/api/v1*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**appActivityLogsGet**](ActivityApi.md#appactivitylogsget) | **GET** /app/activity-logs | List activity logs |



## appActivityLogsGet

> { [key: string]: any; } appActivityLogsGet(action, entityType, entityId, actorId, limit, cursor)

List activity logs

Paginated audit trail of account activity. total is a real row count; page with cursor/next_cursor, not offset.

### Example

```ts
import {
  Configuration,
  ActivityApi,
} from '@splashifypro/sdk';
import type { AppActivityLogsGetRequest } from '@splashifypro/sdk';

async function example() {
  console.log("🚀 Testing @splashifypro/sdk SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: BearerAuth
    apiKey: "YOUR API KEY",
  });
  const api = new ActivityApi(config);

  const body = {
    // string | Filter by action (optional)
    action: action_example,
    // string | Filter by entity type (optional)
    entityType: entityType_example,
    // string | Filter by entity id (optional)
    entityId: entityId_example,
    // string | Filter by actor id (optional)
    actorId: actorId_example,
    // number | Page size, default 50, max 200 (optional)
    limit: 56,
    // string | Opaque cursor from a previous response\'s next_cursor (optional)
    cursor: cursor_example,
  } satisfies AppActivityLogsGetRequest;

  try {
    const data = await api.appActivityLogsGet(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **action** | `string` | Filter by action | [Optional] [Defaults to `undefined`] |
| **entityType** | `string` | Filter by entity type | [Optional] [Defaults to `undefined`] |
| **entityId** | `string` | Filter by entity id | [Optional] [Defaults to `undefined`] |
| **actorId** | `string` | Filter by actor id | [Optional] [Defaults to `undefined`] |
| **limit** | `number` | Page size, default 50, max 200 | [Optional] [Defaults to `undefined`] |
| **cursor** | `string` | Opaque cursor from a previous response\&#39;s next_cursor | [Optional] [Defaults to `undefined`] |

### Return type

**{ [key: string]: any; }**

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | { success, logs, total, next_cursor } |  -  |
| **401** | Unauthorized |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


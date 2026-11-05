# MediaApi

All URIs are relative to *https://apis.splashifypro.com/api/v1*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**appMediaGet**](MediaApi.md#appmediaget) | **GET** /app/media | List uploaded media files |



## appMediaGet

> { [key: string]: any; } appMediaGet(type)

List uploaded media files

storage_used/storage_limit are included so a caller does not need a second round-trip to GET /app/media/storage.

### Example

```ts
import {
  Configuration,
  MediaApi,
} from '@splashifypro/sdk';
import type { AppMediaGetRequest } from '@splashifypro/sdk';

async function example() {
  console.log("🚀 Testing @splashifypro/sdk SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: BearerAuth
    apiKey: "YOUR API KEY",
  });
  const api = new MediaApi(config);

  const body = {
    // string | Filter: image, video, audio, or document (optional)
    type: type_example,
  } satisfies AppMediaGetRequest;

  try {
    const data = await api.appMediaGet(body);
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
| **type** | `string` | Filter: image, video, audio, or document | [Optional] [Defaults to `undefined`] |

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
| **200** | { success, files, count, storage_used, storage_limit } |  -  |
| **401** | Unauthorized |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


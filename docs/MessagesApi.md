# MessagesApi

All URIs are relative to *https://apis.splashifypro.com/api/v1*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**publicMessagePost**](MessagesApi.md#publicmessagepost) | **POST** /public/message | Send a WhatsApp message |



## publicMessagePost

> { [key: string]: any; } publicMessagePost(body)

Send a WhatsApp message

Send any supported WhatsApp message type to a contact. See type-specific request examples in the per-message docs.

### Example

```ts
import {
  Configuration,
  MessagesApi,
} from '';
import type { PublicMessagePostRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: BearerAuth
    apiKey: "YOUR API KEY",
  });
  const api = new MessagesApi(config);

  const body = {
    // object | Send message payload (type, phoneNumber, data)
    body: Object,
  } satisfies PublicMessagePostRequest;

  try {
    const data = await api.publicMessagePost(body);
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
| **body** | `object` | Send message payload (type, phoneNumber, data) | |

### Return type

**{ [key: string]: any; }**

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | { result: true, message: ..., id: &lt;message_id&gt; } |  -  |
| **400** | Invalid request body |  -  |
| **401** | Missing/invalid API key |  -  |
| **429** | Rate limit exceeded |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


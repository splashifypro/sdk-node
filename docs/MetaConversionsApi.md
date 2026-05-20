# MetaConversionsApi

All URIs are relative to *https://apis.splashifypro.com/api/v1*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**publicCapiSendEventPost**](MetaConversionsApi.md#publiccapisendeventpost) | **POST** /public/capi/send-event | Send a Meta Conversion API event |



## publicCapiSendEventPost

> { [key: string]: any; } publicCapiSendEventPost(body)

Send a Meta Conversion API event

Fire a server-side Meta Pixel / Conversions API event for a contact identified by phone number. Useful for ROI attribution on Click-to-WhatsApp ads. Event names: Lead, Purchase, AddToCart, etc. Requires Meta Ads OAuth completed in the dashboard.

### Example

```ts
import {
  Configuration,
  MetaConversionsApi,
} from '';
import type { PublicCapiSendEventPostRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: BearerAuth
    apiKey: "YOUR API KEY",
  });
  const api = new MetaConversionsApi(config);

  const body = {
    // object | CAPI payload (event_name, phone_number, value, currency)
    body: Object,
  } satisfies PublicCapiSendEventPostRequest;

  try {
    const data = await api.publicCapiSendEventPost(body);
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
| **body** | `object` | CAPI payload (event_name, phone_number, value, currency) | |

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
| **200** | { success: true } |  -  |
| **400** | Invalid event_name / Meta Ads not connected |  -  |
| **401** | Missing/invalid API key |  -  |
| **429** | Rate limit exceeded |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


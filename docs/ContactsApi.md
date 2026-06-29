# ContactsApi

All URIs are relative to *https://apis.splashifypro.com/api/v1*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**publicApisUsersPost**](ContactsApi.md#publicapisuserspost) | **POST** /public/apis/users | List contacts (paginated, filterable) |



## publicApisUsersPost

> { [key: string]: any; } publicApisUsersPost(offset, limit, body)

List contacts (paginated, filterable)

Returns a paginated list of contacts (customers) for the authenticated account. Filters are applied in-memory and support traits: created_at_utc, modified_at_utc, phone_number, name, email, whatsapp_opted_in, plus any custom column from the contact\&#39;s column_data.

### Example

```ts
import {
  Configuration,
  ContactsApi,
} from '';
import type { PublicApisUsersPostRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: BearerAuth
    apiKey: "YOUR API KEY",
  });
  const api = new ContactsApi(config);

  const body = {
    // number | Pagination offset (default 0) (optional)
    offset: 56,
    // number | Page size (default 100, max 500) (optional)
    limit: 56,
    // object | Optional filter object: {filters:[{trait,op,val}]} (optional)
    body: Object,
  } satisfies PublicApisUsersPostRequest;

  try {
    const data = await api.publicApisUsersPost(body);
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
| **offset** | `number` | Pagination offset (default 0) | [Optional] [Defaults to `undefined`] |
| **limit** | `number` | Page size (default 100, max 500) | [Optional] [Defaults to `undefined`] |
| **body** | `object` | Optional filter object: {filters:[{trait,op,val}]} | [Optional] |

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
| **200** | { result: true, data: { customers: [...], total_customers, has_next_page } } |  -  |
| **401** | Missing/invalid API key |  -  |
| **429** | Rate limit exceeded |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


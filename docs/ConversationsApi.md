# ConversationsApi

All URIs are relative to *https://apis.splashifypro.com/api/v1*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**publicAssignmentPost**](ConversationsApi.md#publicassignmentpost) | **POST** /public/assignment | Assign a chat to a team member |



## publicAssignmentPost

> { [key: string]: any; } publicAssignmentPost(body)

Assign a chat to a team member

Routes a conversation to a specific team member by their email address. Conversation is identified by the customer\&#39;s phone number. Both must belong to the authenticated account.

### Example

```ts
import {
  Configuration,
  ConversationsApi,
} from '';
import type { PublicAssignmentPostRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: BearerAuth
    apiKey: "YOUR API KEY",
  });
  const api = new ConversationsApi(config);

  const body = {
    // object | Assignment payload (user_phone_number, agent_email)
    body: Object,
  } satisfies PublicAssignmentPostRequest;

  try {
    const data = await api.publicAssignmentPost(body);
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
| **body** | `object` | Assignment payload (user_phone_number, agent_email) | |

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
| **200** | { result: true, message: \&#39;Chat Assigned Successfully\&#39; } |  -  |
| **400** | Invalid request / agent or phone not found |  -  |
| **401** | Missing/invalid API key |  -  |
| **429** | Rate limit exceeded |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


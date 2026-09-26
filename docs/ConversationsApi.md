# ConversationsApi

All URIs are relative to *https://apis.splashifypro.com/api/v1*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**appMessagesConversationsConversationIdAssignPost**](ConversationsApi.md#appmessagesconversationsconversationidassignpost) | **POST** /app/messages/conversations/{conversation_id}/assign | Assign or release a conversation |
| [**publicAssignmentPost**](ConversationsApi.md#publicassignmentpost) | **POST** /public/assignment | Assign or release a chat |



## appMessagesConversationsConversationIdAssignPost

> { [key: string]: any; } appMessagesConversationsConversationIdAssignPost(conversationId, body)

Assign or release a conversation

Assigns a conversation to a team member, or releases it when assigned_to is empty — fires team_member_assigned or team_member_unassigned respectively.

### Example

```ts
import {
  Configuration,
  ConversationsApi,
} from '@splashifypro/sdk';
import type { AppMessagesConversationsConversationIdAssignPostRequest } from '@splashifypro/sdk';

async function example() {
  console.log("🚀 Testing @splashifypro/sdk SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: BearerAuth
    apiKey: "YOUR API KEY",
  });
  const api = new ConversationsApi(config);

  const body = {
    // string | Conversation ID
    conversationId: conversationId_example,
    // object | { assigned_to: string }, empty string releases
    body: Object,
  } satisfies AppMessagesConversationsConversationIdAssignPostRequest;

  try {
    const data = await api.appMessagesConversationsConversationIdAssignPost(body);
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
| **conversationId** | `string` | Conversation ID | [Defaults to `undefined`] |
| **body** | `object` | { assigned_to: string }, empty string releases | |

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
| **200** | { success: true, assigned_to: string } |  -  |
| **400** | Invalid conversation_id / body |  -  |
| **401** | Unauthorized |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## publicAssignmentPost

> { [key: string]: any; } publicAssignmentPost(body)

Assign or release a chat

Routes a conversation to a specific team member by their email address, or releases it when agent_email is empty or omitted. Conversation is identified by the customer\&#39;s phone number. Both agent and conversation must belong to the authenticated account.

### Example

```ts
import {
  Configuration,
  ConversationsApi,
} from '@splashifypro/sdk';
import type { PublicAssignmentPostRequest } from '@splashifypro/sdk';

async function example() {
  console.log("🚀 Testing @splashifypro/sdk SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: BearerAuth
    apiKey: "YOUR API KEY",
  });
  const api = new ConversationsApi(config);

  const body = {
    // object | Assignment payload: user_phone_number (required), agent_email (empty/omitted releases)
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
| **body** | `object` | Assignment payload: user_phone_number (required), agent_email (empty/omitted releases) | |

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


# ConversationsApi

All URIs are relative to *https://apis.splashifypro.com/api/v1*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**appMessagesConversationsConversationIdAssignPost**](ConversationsApi.md#appmessagesconversationsconversationidassignpost) | **POST** /app/messages/conversations/{conversation_id}/assign | Assign or release a conversation |
| [**publicAssignmentPost**](ConversationsApi.md#publicassignmentpost) | **POST** /public/assignment | Assign or release a chat |
| [**publicTeamsGet**](ConversationsApi.md#publicteamsget) | **GET** /public/teams | List teams |



## appMessagesConversationsConversationIdAssignPost

> { [key: string]: any; } appMessagesConversationsConversationIdAssignPost(conversationId, body)

Assign or release a conversation

Gives a conversation to a team member, a team or both. Empty assigned_to releases it (back to its team\&#39;s queue when it has a team). team_id left out keeps the team, \&quot;\&quot; clears it. Fires team_member_assigned, team_member_unassigned or conversation_queued.

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
    // object | { assigned_to: string, team_id?: string, note?: string }
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
| **body** | `object` | { assigned_to: string, team_id?: string, note?: string } | |

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
| **200** | { success, assigned_to, assigned_team, team_name, queued } |  -  |
| **400** | Invalid conversation_id / body |  -  |
| **401** | Unauthorized |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## publicAssignmentPost

> { [key: string]: any; } publicAssignmentPost(body)

Assign or release a chat

Routes a conversation to a team member by their email address, to a team (team_id or team_name: with no agent_email the chat waits in the team\&#39;s queue), or both (the person, inside that team). An empty or omitted agent_email with no team releases it. team_id \&quot;\&quot; takes the chat out of its team. The conversation is identified by the customer\&#39;s phone number. Everything must belong to the authenticated account.

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
    // object | user_phone_number (required), agent_email, team_id or team_name (all optional)
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
| **body** | `object` | user_phone_number (required), agent_email, team_id or team_name (all optional) | |

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
| **200** | { result: true, message, team_id, team_name } |  -  |
| **400** | Invalid request / agent, team or phone not found |  -  |
| **401** | Missing/invalid API key |  -  |
| **409** | Someone else took the chat first (it had nobody on it, and a teammate got it in the meantime) |  -  |
| **429** | Rate limit exceeded |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## publicTeamsGet

> { [key: string]: any; } publicTeamsGet()

List teams

The account\&#39;s teams with their people (id, name, team lead or not). Empty when the account has no teams. Use a team_id or team_name with POST /public/assignment.

### Example

```ts
import {
  Configuration,
  ConversationsApi,
} from '@splashifypro/sdk';
import type { PublicTeamsGetRequest } from '@splashifypro/sdk';

async function example() {
  console.log("🚀 Testing @splashifypro/sdk SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: BearerAuth
    apiKey: "YOUR API KEY",
  });
  const api = new ConversationsApi(config);

  try {
    const data = await api.publicTeamsGet();
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters

This endpoint does not need any parameter.

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
| **200** | { result: true, teams: [{ team_id, name, color, members: [{ member_id, name, email, is_lead }] }] } |  -  |
| **401** | Missing/invalid API key |  -  |
| **429** | Rate limit exceeded |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


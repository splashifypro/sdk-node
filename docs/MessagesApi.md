# MessagesApi

All URIs are relative to *https://apis.splashifypro.com/api/v1*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**appMessagesSendMediaPost**](MessagesApi.md#appmessagessendmediapost) | **POST** /app/messages/send-media | Send a media message |
| [**appMessagesTypingIndicatorPost**](MessagesApi.md#appmessagestypingindicatorpost) | **POST** /app/messages/typing-indicator | Send a typing indicator |
| [**publicMessagePost**](MessagesApi.md#publicmessagepost) | **POST** /public/message | Send a WhatsApp message |



## appMessagesSendMediaPost

> { [key: string]: any; } appMessagesSendMediaPost(body)

Send a media message

Sends an image, video, audio, or document message. Pass either media_url (any public URL) or media_id (a file previously uploaded via POST /app/media) — not both required.

### Example

```ts
import {
  Configuration,
  MessagesApi,
} from '@splashifypro/sdk';
import type { AppMessagesSendMediaPostRequest } from '@splashifypro/sdk';

async function example() {
  console.log("🚀 Testing @splashifypro/sdk SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: BearerAuth
    apiKey: "YOUR API KEY",
  });
  const api = new MessagesApi(config);

  const body = {
    // object | { to, media_type, media_url|media_id, caption?, filename?, voice? }
    body: Object,
  } satisfies AppMessagesSendMediaPostRequest;

  try {
    const data = await api.appMessagesSendMediaPost(body);
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
| **body** | `object` | { to, media_type, media_url|media_id, caption?, filename?, voice? } | |

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
| **200** | { success: true, wa_message_id: string } |  -  |
| **400** | Missing/invalid fields |  -  |
| **401** | Unauthorized |  -  |
| **404** | media_id not found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## appMessagesTypingIndicatorPost

> { [key: string]: any; } appMessagesTypingIndicatorPost(body)

Send a typing indicator

Shows the typing indicator on the given inbound message\&#39;s conversation. WhatsApp dismisses it after ~25s or on the next message from this business, whichever comes first.

### Example

```ts
import {
  Configuration,
  MessagesApi,
} from '@splashifypro/sdk';
import type { AppMessagesTypingIndicatorPostRequest } from '@splashifypro/sdk';

async function example() {
  console.log("🚀 Testing @splashifypro/sdk SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: BearerAuth
    apiKey: "YOUR API KEY",
  });
  const api = new MessagesApi(config);

  const body = {
    // object | { message_id: string }
    body: Object,
  } satisfies AppMessagesTypingIndicatorPostRequest;

  try {
    const data = await api.appMessagesTypingIndicatorPost(body);
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
| **body** | `object` | { message_id: string } | |

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
| **200** | { success: true, dismissed_after_seconds: 25 } |  -  |
| **400** | message_id is required |  -  |
| **401** | Unauthorized |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## publicMessagePost

> { [key: string]: any; } publicMessagePost(body)

Send a WhatsApp message

Send any supported WhatsApp message type to a contact. See type-specific request examples in the per-message docs.

### Example

```ts
import {
  Configuration,
  MessagesApi,
} from '@splashifypro/sdk';
import type { PublicMessagePostRequest } from '@splashifypro/sdk';

async function example() {
  console.log("🚀 Testing @splashifypro/sdk SDK...");
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


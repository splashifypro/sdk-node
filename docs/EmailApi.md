# EmailApi

All URIs are relative to *https://apis.splashifypro.com/api/v1*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**publicEmailSendPost**](EmailApi.md#publicemailsendpost) | **POST** /public/email/send | Send a transactional email |
| [**publicEmailSendTemplatePost**](EmailApi.md#publicemailsendtemplatepost) | **POST** /public/email/send-template | Send a templated email |
| [**publicEmailStatusMessageIdGet**](EmailApi.md#publicemailstatusmessageidget) | **GET** /public/email/status/{message_id} | Get email delivery status |



## publicEmailSendPost

> { [key: string]: any; } publicEmailSendPost(body)

Send a transactional email

Send a fully-formed HTML email to one or more recipients. Caller supplies subject + html + text + from_email + recipient. Optional attachments[] (PDFs, images, docs) ride inline as base64 — backend builds multipart/mixed and DKIM-signs. Caps: 20 files / 10 MiB total / executable extensions blocked. Delivered via the platform\&#39;s self-hosted email pipeline with category&#x3D;email_transactional. From-email must be on a verified sender domain.

### Example

```ts
import {
  Configuration,
  EmailApi,
} from '';
import type { PublicEmailSendPostRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: BearerAuth
    apiKey: "YOUR API KEY",
  });
  const api = new EmailApi(config);

  const body = {
    // object | Send email payload (to, subject, html, text, from_email, reply_to, attachments)
    body: Object,
  } satisfies PublicEmailSendPostRequest;

  try {
    const data = await api.publicEmailSendPost(body);
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
| **body** | `object` | Send email payload (to, subject, html, text, from_email, reply_to, attachments) | |

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
| **200** | { result: true, message_id: ... } |  -  |
| **400** | Invalid request body / domain not verified / INVALID_ATTACHMENT |  -  |
| **401** | Missing/invalid API key |  -  |
| **402** | Plan does not include email marketing |  -  |
| **429** | Rate limit exceeded |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## publicEmailSendTemplatePost

> { [key: string]: any; } publicEmailSendTemplatePost(body)

Send a templated email

Send an email using a saved template (created via the in-app template editor at /email/templates). Caller supplies template_id + recipient + variables map. Backend pulls the template\&#39;s pre-rendered HTML and substitutes {{vars}}. Optional attachments[] ride inline as base64 — same shape + caps as /send (20 files / 10 MiB / blocked extensions).

### Example

```ts
import {
  Configuration,
  EmailApi,
} from '';
import type { PublicEmailSendTemplatePostRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: BearerAuth
    apiKey: "YOUR API KEY",
  });
  const api = new EmailApi(config);

  const body = {
    // object | Template send payload (to, template_id, variables, from_email, subject, attachments)
    body: Object,
  } satisfies PublicEmailSendTemplatePostRequest;

  try {
    const data = await api.publicEmailSendTemplatePost(body);
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
| **body** | `object` | Template send payload (to, template_id, variables, from_email, subject, attachments) | |

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
| **200** | { result: true, message_id: ... } |  -  |
| **400** | Invalid request body / template not found / INVALID_ATTACHMENT |  -  |
| **401** | Missing/invalid API key |  -  |
| **402** | Plan does not include email marketing |  -  |
| **429** | Rate limit exceeded |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## publicEmailStatusMessageIdGet

> { [key: string]: any; } publicEmailStatusMessageIdGet(messageId)

Get email delivery status

Look up the current status of an email message by its message_id (returned from /public/email/send or /send-template). Status values: queued, sending, delivered, bounced, failed.

### Example

```ts
import {
  Configuration,
  EmailApi,
} from '';
import type { PublicEmailStatusMessageIdGetRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: BearerAuth
    apiKey: "YOUR API KEY",
  });
  const api = new EmailApi(config);

  const body = {
    // string | Message ID returned by send
    messageId: messageId_example,
  } satisfies PublicEmailStatusMessageIdGetRequest;

  try {
    const data = await api.publicEmailStatusMessageIdGet(body);
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
| **messageId** | `string` | Message ID returned by send | [Defaults to `undefined`] |

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
| **200** | { result: true, status: ..., delivered_at: ..., bounced_at: ... } |  -  |
| **401** | Missing/invalid API key |  -  |
| **404** | Message not found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


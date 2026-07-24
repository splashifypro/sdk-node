# PartnerEmailSendApi

All URIs are relative to *https://apis.splashifypro.com/api/v1*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**partnerEmailEmailsMessageIdGet**](PartnerEmailSendApi.md#partneremailemailsmessageidget) | **GET** /partner/email/emails/{message_id} | Get email status |
| [**partnerEmailSendBulkPost**](PartnerEmailSendApi.md#partneremailsendbulkpost) | **POST** /partner/email/send-bulk | Send bulk templated email |
| [**partnerEmailSendPost**](PartnerEmailSendApi.md#partneremailsendpost) | **POST** /partner/email/send | Send email |
| [**partnerEmailSendRawPost**](PartnerEmailSendApi.md#partneremailsendrawpost) | **POST** /partner/email/send-raw | Send raw MIME email |
| [**partnerEmailSendTemplatePost**](PartnerEmailSendApi.md#partneremailsendtemplatepost) | **POST** /partner/email/send-template | Send templated email |



## partnerEmailEmailsMessageIdGet

> { [key: string]: any; } partnerEmailEmailsMessageIdGet(messageId)

Get email status

Look up the current status and event timeline for an email by message_id. Returns sent / delivered / bounced / complained state plus open + click counters.

### Example

```ts
import {
  Configuration,
  PartnerEmailSendApi,
} from '';
import type { PartnerEmailEmailsMessageIdGetRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: BearerAuth
    apiKey: "YOUR API KEY",
  });
  const api = new PartnerEmailSendApi(config);

  const body = {
    // string | Message ID returned from /send
    messageId: messageId_example,
  } satisfies PartnerEmailEmailsMessageIdGetRequest;

  try {
    const data = await api.partnerEmailEmailsMessageIdGet(body);
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
| **messageId** | `string` | Message ID returned from /send | [Defaults to `undefined`] |

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
| **200** | { success: true, message: {...} } |  -  |
| **401** | Missing/invalid API key |  -  |
| **404** | Message not found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## partnerEmailSendBulkPost

> { [key: string]: any; } partnerEmailSendBulkPost(body)

Send bulk templated email

One template + one verified From + N destinations, each with its own ReplacementData map. Equivalent to AWS SES SendBulkTemplatedEmail. Caps: 50 destinations × 50 recipients &#x3D; 500 total per request.

### Example

```ts
import {
  Configuration,
  PartnerEmailSendApi,
} from '';
import type { PartnerEmailSendBulkPostRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: BearerAuth
    apiKey: "YOUR API KEY",
  });
  const api = new PartnerEmailSendApi(config);

  const body = {
    // object | Send bulk payload (template_name, from, default_template_data, destinations[])
    body: Object,
  } satisfies PartnerEmailSendBulkPostRequest;

  try {
    const data = await api.partnerEmailSendBulkPost(body);
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
| **body** | `object` | Send bulk payload (template_name, from, default_template_data, destinations[]) | |

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
| **200** | { success: true, sent, failed, results: [...] } |  -  |
| **400** | Invalid request, TEMPLATE_NOT_FOUND |  -  |
| **401** | Missing/invalid API key |  -  |
| **402** | Insufficient wallet balance |  -  |
| **403** | Sandbox quota or sending paused |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## partnerEmailSendPost

> { [key: string]: any; } partnerEmailSendPost(body)

Send email

Send a transactional or marketing email to up to 50 recipients (combined to + cc + bcc). Equivalent to AWS SES SendEmail.

### Example

```ts
import {
  Configuration,
  PartnerEmailSendApi,
} from '';
import type { PartnerEmailSendPostRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: BearerAuth
    apiKey: "YOUR API KEY",
  });
  const api = new PartnerEmailSendApi(config);

  const body = {
    // object | Send email payload (from, to, subject, html_body, text_body, configuration_set_name?)
    body: Object,
  } satisfies PartnerEmailSendPostRequest;

  try {
    const data = await api.partnerEmailSendPost(body);
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
| **body** | `object` | Send email payload (from, to, subject, html_body, text_body, configuration_set_name?) | |

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
| **200** | { success: true, results: [{recipient, message_id, status}] } |  -  |
| **400** | Invalid request, FROM_NOT_VERIFIED, TOO_MANY_RECIPIENTS |  -  |
| **401** | Missing/invalid API key |  -  |
| **402** | Insufficient wallet balance |  -  |
| **403** | Sandbox quota reached or sending paused |  -  |
| **429** | Rate limit exceeded |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## partnerEmailSendRawPost

> { [key: string]: any; } partnerEmailSendRawPost(body)

Send raw MIME email

Submit a pre-built RFC 5322 MIME message — useful when you\&#39;ve already constructed the email body yourself (DKIM-ready, multipart, calendar invites, etc). Equivalent to AWS SES SendRawEmail. Max 10 MiB raw body.

### Example

```ts
import {
  Configuration,
  PartnerEmailSendApi,
} from '';
import type { PartnerEmailSendRawPostRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: BearerAuth
    apiKey: "YOUR API KEY",
  });
  const api = new PartnerEmailSendApi(config);

  const body = {
    // object | Send raw payload (raw_message_base64, destinations[], from, configuration_set_name?)
    body: Object,
  } satisfies PartnerEmailSendRawPostRequest;

  try {
    const data = await api.partnerEmailSendRawPost(body);
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
| **body** | `object` | Send raw payload (raw_message_base64, destinations[], from, configuration_set_name?) | |

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
| **200** | { success: true, message_id, status } |  -  |
| **400** | Invalid MIME, FROM_NOT_VERIFIED |  -  |
| **401** | Missing/invalid API key |  -  |
| **402** | Insufficient wallet balance |  -  |
| **403** | Sandbox quota or sending paused |  -  |
| **413** | Raw message exceeds 10 MiB |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## partnerEmailSendTemplatePost

> { [key: string]: any; } partnerEmailSendTemplatePost(body)

Send templated email

Render a saved template with per-recipient variables and send it. Equivalent to AWS SES SendTemplatedEmail. Templates are pre-rendered at save time so per-send substitution is cheap.

### Example

```ts
import {
  Configuration,
  PartnerEmailSendApi,
} from '';
import type { PartnerEmailSendTemplatePostRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: BearerAuth
    apiKey: "YOUR API KEY",
  });
  const api = new PartnerEmailSendApi(config);

  const body = {
    // object | Send template payload (template_name OR template_id, from, to[], variables{})
    body: Object,
  } satisfies PartnerEmailSendTemplatePostRequest;

  try {
    const data = await api.partnerEmailSendTemplatePost(body);
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
| **body** | `object` | Send template payload (template_name OR template_id, from, to[], variables{}) | |

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
| **200** | { success: true, results: [{recipient, message_id, status}] } |  -  |
| **400** | Invalid request, TEMPLATE_NOT_FOUND, FROM_NOT_VERIFIED |  -  |
| **401** | Missing/invalid API key |  -  |
| **402** | Insufficient wallet balance |  -  |
| **403** | Sandbox quota or sending paused |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


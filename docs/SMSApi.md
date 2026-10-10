# SMSApi

All URIs are relative to *https://apis.splashifypro.com/api/v1*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**publicSmsBulkBulkIdGet**](SMSApi.md#publicsmsbulkbulkidget) | **GET** /public/sms/bulk/{bulk_id} | Bulk send progress |
| [**publicSmsMessagesMessageIdGet**](SMSApi.md#publicsmsmessagesmessageidget) | **GET** /public/sms/messages/{message_id} | One SMS status |
| [**publicSmsSendBulkPost**](SMSApi.md#publicsmssendbulkpost) | **POST** /public/sms/send-bulk | Send one template to many numbers |
| [**publicSmsSendPost**](SMSApi.md#publicsmssendpost) | **POST** /public/sms/send | Send one SMS |
| [**publicSmsSendersGet**](SMSApi.md#publicsmssendersget) | **GET** /public/sms/senders | SMS sender IDs |
| [**publicSmsTemplatesGet**](SMSApi.md#publicsmstemplatesget) | **GET** /public/sms/templates | Approved SMS templates |



## publicSmsBulkBulkIdGet

> { [key: string]: any; } publicSmsBulkBulkIdGet(bulkId)

Bulk send progress

Progress of a bulk send by the bulk_id /public/sms/send-bulk returned. status is queued, running, completed, stopped or cancelled. failed counts numbers the network refused plus delivery failures reported so far.

### Example

```ts
import {
  Configuration,
  SMSApi,
} from '@splashifypro/sdk';
import type { PublicSmsBulkBulkIdGetRequest } from '@splashifypro/sdk';

async function example() {
  console.log("🚀 Testing @splashifypro/sdk SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: BearerAuth
    apiKey: "YOUR API KEY",
  });
  const api = new SMSApi(config);

  const body = {
    // string | bulk_id from /public/sms/send-bulk
    bulkId: bulkId_example,
  } satisfies PublicSmsBulkBulkIdGetRequest;

  try {
    const data = await api.publicSmsBulkBulkIdGet(body);
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
| **bulkId** | `string` | bulk_id from /public/sms/send-bulk | [Defaults to `undefined`] |

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
| **200** | { success, bulk_id, name, status, stop_reason, total, sent, delivered, failed, charged, created_at, completed_at } |  -  |
| **400** | Invalid bulk_id |  -  |
| **401** | Missing or invalid API key |  -  |
| **404** | Bulk send not found, or SMS not set up |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## publicSmsMessagesMessageIdGet

> { [key: string]: any; } publicSmsMessagesMessageIdGet(messageId)

One SMS status

Status of one message by the message_id /public/sms/send returned. status is queued, sent, delivered, failed or rejected. error says why when it did not arrive.

### Example

```ts
import {
  Configuration,
  SMSApi,
} from '@splashifypro/sdk';
import type { PublicSmsMessagesMessageIdGetRequest } from '@splashifypro/sdk';

async function example() {
  console.log("🚀 Testing @splashifypro/sdk SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: BearerAuth
    apiKey: "YOUR API KEY",
  });
  const api = new SMSApi(config);

  const body = {
    // string | message_id from /public/sms/send
    messageId: messageId_example,
  } satisfies PublicSmsMessagesMessageIdGetRequest;

  try {
    const data = await api.publicSmsMessagesMessageIdGet(body);
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
| **messageId** | `string` | message_id from /public/sms/send | [Defaults to `undefined`] |

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
| **200** | { success, message_id, to, dlt_template_id, status, error, parts, charged, created_at, delivered_at } |  -  |
| **400** | Invalid message_id |  -  |
| **401** | Missing or invalid API key |  -  |
| **404** | Message not found, or SMS not set up |  -  |
| **503** | The message could not be read right now, try again shortly |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## publicSmsSendBulkPost

> { [key: string]: any; } publicSmsSendBulkPost(body, idempotencyKey)

Send one template to many numbers

Queues 1 to 1,000 messages on one approved template of any DLT type. Every row is checked first. A wrong variable count is a 400 naming the row. Invalid numbers, repeats and opted-out contacts are skipped and counted. Refused with 402 and nothing queued when the wallet cannot cover the estimate.

### Example

```ts
import {
  Configuration,
  SMSApi,
} from '@splashifypro/sdk';
import type { PublicSmsSendBulkPostRequest } from '@splashifypro/sdk';

async function example() {
  console.log("🚀 Testing @splashifypro/sdk SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: BearerAuth
    apiKey: "YOUR API KEY",
  });
  const api = new SMSApi(config);

  const body = {
    // object | { dlt_template_id, name?, messages: [{ to, variables[] }] }
    body: Object,
    // string | Makes a retry safe: a repeat within 24 hours gets the same bulk_id back with its current status and replayed true, and nothing is queued again (optional)
    idempotencyKey: idempotencyKey_example,
  } satisfies PublicSmsSendBulkPostRequest;

  try {
    const data = await api.publicSmsSendBulkPost(body);
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
| **body** | `object` | { dlt_template_id, name?, messages: [{ to, variables[] }] } | |
| **idempotencyKey** | `string` | Makes a retry safe: a repeat within 24 hours gets the same bulk_id back with its current status and replayed true, and nothing is queued again | [Optional] [Defaults to `undefined`] |

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
| **200** | { success, bulk_id, name, queued, skipped, skipped_rows, estimated_parts, estimated_cost, status, replayed? } |  -  |
| **400** | Invalid request, a row\&#39;s variables, or no sendable rows |  -  |
| **401** | Missing or invalid API key |  -  |
| **402** | Wallet balance below the estimate, nothing queued |  -  |
| **404** | SMS not set up (code sms_not_set_up) or template not found |  -  |
| **409** | The first request with this Idempotency-Key is still running (code idempotency_in_progress) |  -  |
| **422** | This Idempotency-Key was used with a different body (code idempotency_key_reused) |  -  |
| **429** | Rate limit exceeded, including 10 bulk sends a minute per account (code rate_limited) |  -  |
| **503** | SMS sending unavailable, try again shortly |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## publicSmsSendPost

> { [key: string]: any; } publicSmsSendPost(body, idempotencyKey)

Send one SMS

Sends one DLT SMS from an approved template to an Indian mobile number. The template decides the DLT type, the sender ID and the price. variables fill the template\&#39;s {#var#} slots in order, 30 characters at most each. A message the network refuses is a 200 with accepted false.

### Example

```ts
import {
  Configuration,
  SMSApi,
} from '@splashifypro/sdk';
import type { PublicSmsSendPostRequest } from '@splashifypro/sdk';

async function example() {
  console.log("🚀 Testing @splashifypro/sdk SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: BearerAuth
    apiKey: "YOUR API KEY",
  });
  const api = new SMSApi(config);

  const body = {
    // object | { to, dlt_template_id, variables[] }
    body: Object,
    // string | Makes a retry safe: a repeat within 24 hours gets the first answer back with replayed true, and nothing is sent again (optional)
    idempotencyKey: idempotencyKey_example,
  } satisfies PublicSmsSendPostRequest;

  try {
    const data = await api.publicSmsSendPost(body);
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
| **body** | `object` | { to, dlt_template_id, variables[] } | |
| **idempotencyKey** | `string` | Makes a retry safe: a repeat within 24 hours gets the first answer back with replayed true, and nothing is sent again | [Optional] [Defaults to `undefined`] |

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
| **200** | { success, accepted, message_id, status, parts, unicode, charged, balance_after, message?, replayed? } |  -  |
| **400** | Invalid request, number or variables |  -  |
| **401** | Missing or invalid API key |  -  |
| **402** | Wallet balance too low |  -  |
| **403** | The contact opted out (code opted_out) |  -  |
| **404** | SMS not set up (code sms_not_set_up) or template not found |  -  |
| **409** | The first request with this Idempotency-Key is still running (code idempotency_in_progress) |  -  |
| **422** | This Idempotency-Key was used with a different body (code idempotency_key_reused) |  -  |
| **429** | Rate limit exceeded |  -  |
| **503** | SMS sending unavailable, try again shortly |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## publicSmsSendersGet

> { [key: string]: any; } publicSmsSendersGet()

SMS sender IDs

The sender IDs on the account. status is approved, pending or rejected; type is the DLT type the sender ID was registered for.

### Example

```ts
import {
  Configuration,
  SMSApi,
} from '@splashifypro/sdk';
import type { PublicSmsSendersGetRequest } from '@splashifypro/sdk';

async function example() {
  console.log("🚀 Testing @splashifypro/sdk SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: BearerAuth
    apiKey: "YOUR API KEY",
  });
  const api = new SMSApi(config);

  try {
    const data = await api.publicSmsSendersGet();
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
| **200** | { success, senders: [{ sender_id, type, status }] } |  -  |
| **401** | Missing or invalid API key |  -  |
| **404** | SMS not set up (code sms_not_set_up) |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## publicSmsTemplatesGet

> { [key: string]: any; } publicSmsTemplatesGet()

Approved SMS templates

The approved DLT templates on the account. type is promotional, transactional, service_implicit or service_explicit; variables is how many {#var#} slots the body has.

### Example

```ts
import {
  Configuration,
  SMSApi,
} from '@splashifypro/sdk';
import type { PublicSmsTemplatesGetRequest } from '@splashifypro/sdk';

async function example() {
  console.log("🚀 Testing @splashifypro/sdk SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: BearerAuth
    apiKey: "YOUR API KEY",
  });
  const api = new SMSApi(config);

  try {
    const data = await api.publicSmsTemplatesGet();
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
| **200** | { success, templates: [{ dlt_template_id, name, type, sender_id, body, variables }] } |  -  |
| **401** | Missing or invalid API key |  -  |
| **404** | SMS not set up (code sms_not_set_up) |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


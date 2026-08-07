# RCSApi

All URIs are relative to *https://apis.splashifypro.com/api/v1*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**publicRcsCheckCapabilityPost**](RCSApi.md#publicrcscheckcapabilitypost) | **POST** /public/rcs/check-capability | Check RCS reachability |
| [**publicRcsSendPost**](RCSApi.md#publicrcssendpost) | **POST** /public/rcs/send | Send an RCS message (free-form or from a stored template) |
| [**publicRcsSendTemplatePost**](RCSApi.md#publicrcssendtemplatepost) | **POST** /public/rcs/send-template | (Deprecated) Send an approved RCS template — use POST /rcs/send instead |



## publicRcsCheckCapabilityPost

> { [key: string]: any; } publicRcsCheckCapabilityPost(body)

Check RCS reachability

Returns the subset of the given phone numbers that are RCS-reachable on JioCX. Accepts a single phone or a bulk list (up to 10,000). Fail-open — if the gateway is momentarily unavailable, the input is returned unchanged so send flows are not blocked.

### Example

```ts
import {
  Configuration,
  RCSApi,
} from '@splashifypro/sdk';
import type { PublicRcsCheckCapabilityPostRequest } from '@splashifypro/sdk';

async function example() {
  console.log("🚀 Testing @splashifypro/sdk SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: BearerAuth
    apiKey: "YOUR API KEY",
  });
  const api = new RCSApi(config);

  const body = {
    // HandlersCheckCapabilityRequest | phone (single, E.164) OR phones (array of E.164)
    body: ...,
  } satisfies PublicRcsCheckCapabilityPostRequest;

  try {
    const data = await api.publicRcsCheckCapabilityPost(body);
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
| **body** | [HandlersCheckCapabilityRequest](HandlersCheckCapabilityRequest.md) | phone (single, E.164) OR phones (array of E.164) | |

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
| **200** | { success, total, reachable_count, reachable, unreachable } |  -  |
| **400** | Missing phone / phones or malformed body |  -  |
| **401** | Missing/invalid API key |  -  |
| **403** | RCS not enabled for this account |  -  |
| **500** | Gateway lookup failed |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## publicRcsSendPost

> { [key: string]: any; } publicRcsSendPost(body)

Send an RCS message (free-form or from a stored template)

Send any RCS message type — text, media, card, multiple_cards — OR reference a stored approved template by template_id with positional variables. Presence of template_id picks the template path.

### Example

```ts
import {
  Configuration,
  RCSApi,
} from '@splashifypro/sdk';
import type { PublicRcsSendPostRequest } from '@splashifypro/sdk';

async function example() {
  console.log("🚀 Testing @splashifypro/sdk SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: BearerAuth
    apiKey: "YOUR API KEY",
  });
  const api = new RCSApi(config);

  const body = {
    // object | Free-form: { to, type, ... }. Template: { to, template_id, variables? }
    body: Object,
  } satisfies PublicRcsSendPostRequest;

  try {
    const data = await api.publicRcsSendPost(body);
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
| **body** | `object` | Free-form: { to, type, ... }. Template: { to, template_id, variables? } | |

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
| **200** | { success, rcs_message_id, message_id, conversation_id } |  -  |
| **400** | Invalid request body |  -  |
| **401** | Missing/invalid API key |  -  |
| **402** | Insufficient wallet balance |  -  |
| **403** | RCS not enabled for this account, or template not approved |  -  |
| **404** | Template not found (template_id path only) |  -  |
| **429** | Rate limit exceeded |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## publicRcsSendTemplatePost

> { [key: string]: any; } publicRcsSendTemplatePost(body)

(Deprecated) Send an approved RCS template — use POST /rcs/send instead

Send a stored, approved RCS template. Positional {#varN#} placeholders are filled from the variables array, in order. Deprecated alias. POST /rcs/send accepts { to, template_id, variables } directly. Kept for backward-compatibility.

### Example

```ts
import {
  Configuration,
  RCSApi,
} from '@splashifypro/sdk';
import type { PublicRcsSendTemplatePostRequest } from '@splashifypro/sdk';

async function example() {
  console.log("🚀 Testing @splashifypro/sdk SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: BearerAuth
    apiKey: "YOUR API KEY",
  });
  const api = new RCSApi(config);

  const body = {
    // object | RCS template payload (to, template_id, variables)
    body: Object,
  } satisfies PublicRcsSendTemplatePostRequest;

  try {
    const data = await api.publicRcsSendTemplatePost(body);
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
| **body** | `object` | RCS template payload (to, template_id, variables) | |

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
| **200** | { success, rcs_message_id, message_id, conversation_id } |  -  |
| **400** | Invalid request body |  -  |
| **401** | Missing/invalid API key |  -  |
| **402** | Insufficient wallet balance |  -  |
| **403** | RCS not enabled / template not approved |  -  |
| **404** | Template not found |  -  |
| **429** | Rate limit exceeded |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


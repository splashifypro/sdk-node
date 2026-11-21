# PartnerEmailIdentitiesApi

All URIs are relative to *https://apis.splashifypro.com/api/v1*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**partnerEmailIdentitiesGet**](PartnerEmailIdentitiesApi.md#partneremailidentitiesget) | **GET** /partner/email/identities | List sending identities |
| [**partnerEmailIdentitiesPost**](PartnerEmailIdentitiesApi.md#partneremailidentitiespost) | **POST** /partner/email/identities | Create sending identity |
| [**partnerEmailIdentitiesTypeValueVerifyPost**](PartnerEmailIdentitiesApi.md#partneremailidentitiestypevalueverifypost) | **POST** /partner/email/identities/{type}/{value}/verify | Verify identity |



## partnerEmailIdentitiesGet

> { [key: string]: any; } partnerEmailIdentitiesGet(limit, cursor)

List sending identities

Returns the verified or pending sending identities (domains + verified email addresses) for the authenticated partner.

### Example

```ts
import {
  Configuration,
  PartnerEmailIdentitiesApi,
} from '@splashifypro/sdk';
import type { PartnerEmailIdentitiesGetRequest } from '@splashifypro/sdk';

async function example() {
  console.log("🚀 Testing @splashifypro/sdk SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: BearerAuth
    apiKey: "YOUR API KEY",
  });
  const api = new PartnerEmailIdentitiesApi(config);

  const body = {
    // number | Rows on a page (default 100, max 1000) (optional)
    limit: 56,
    // string | next_cursor of the page before (optional)
    cursor: cursor_example,
  } satisfies PartnerEmailIdentitiesGetRequest;

  try {
    const data = await api.partnerEmailIdentitiesGet(body);
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
| **limit** | `number` | Rows on a page (default 100, max 1000) | [Optional] [Defaults to `undefined`] |
| **cursor** | `string` | next_cursor of the page before | [Optional] [Defaults to `undefined`] |

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
| **200** | { success: true, identities: [{type,value,status,...}] } |  -  |
| **401** | Missing/invalid API key |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## partnerEmailIdentitiesPost

> { [key: string]: any; } partnerEmailIdentitiesPost(body)

Create sending identity

Register a new sending identity. For DOMAIN type returns the SPF + DKIM CNAME + DMARC TXT records to publish; for EMAIL_ADDRESS type emails a one-time confirmation link.

### Example

```ts
import {
  Configuration,
  PartnerEmailIdentitiesApi,
} from '@splashifypro/sdk';
import type { PartnerEmailIdentitiesPostRequest } from '@splashifypro/sdk';

async function example() {
  console.log("🚀 Testing @splashifypro/sdk SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: BearerAuth
    apiKey: "YOUR API KEY",
  });
  const api = new PartnerEmailIdentitiesApi(config);

  const body = {
    // object | Create identity payload (identity_type, identity_value)
    body: Object,
  } satisfies PartnerEmailIdentitiesPostRequest;

  try {
    const data = await api.partnerEmailIdentitiesPost(body);
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
| **body** | `object` | Create identity payload (identity_type, identity_value) | |

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
| **200** | { success: true, identity: {...}, dns_records: {...} } |  -  |
| **400** | Invalid request |  -  |
| **401** | Missing/invalid API key |  -  |
| **409** | Identity already exists |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## partnerEmailIdentitiesTypeValueVerifyPost

> { [key: string]: any; } partnerEmailIdentitiesTypeValueVerifyPost(type, value)

Verify identity

Re-runs DNS verification (SPF + DKIM + DMARC checks) on a domain identity, triggered after publishing the DNS records returned from CreateIdentity. For an EMAIL_ADDRESS identity still pending, emails a new confirmation link.

### Example

```ts
import {
  Configuration,
  PartnerEmailIdentitiesApi,
} from '@splashifypro/sdk';
import type { PartnerEmailIdentitiesTypeValueVerifyPostRequest } from '@splashifypro/sdk';

async function example() {
  console.log("🚀 Testing @splashifypro/sdk SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: BearerAuth
    apiKey: "YOUR API KEY",
  });
  const api = new PartnerEmailIdentitiesApi(config);

  const body = {
    // string | DOMAIN or EMAIL_ADDRESS
    type: type_example,
    // string | Domain (yourdomain.com) or email address
    value: value_example,
  } satisfies PartnerEmailIdentitiesTypeValueVerifyPostRequest;

  try {
    const data = await api.partnerEmailIdentitiesTypeValueVerifyPost(body);
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
| **type** | `string` | DOMAIN or EMAIL_ADDRESS | [Defaults to `undefined`] |
| **value** | `string` | Domain (yourdomain.com) or email address | [Defaults to `undefined`] |

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
| **200** | { success: true, status, spf, dkim, dmarc } |  -  |
| **401** | Missing/invalid API key |  -  |
| **404** | Identity not found |  -  |
| **429** | Too many confirmation emails (EMAIL_ADDRESS) |  -  |
| **503** | Could not finish the check, nothing was stored |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


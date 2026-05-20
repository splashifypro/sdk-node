# PartnerEmailIdentitiesApi

All URIs are relative to *https://apis.splashifypro.com/api/v1*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**partnerEmailIdentitiesGet**](PartnerEmailIdentitiesApi.md#partneremailidentitiesget) | **GET** /partner/email/identities | List sending identities |
| [**partnerEmailIdentitiesPost**](PartnerEmailIdentitiesApi.md#partneremailidentitiespost) | **POST** /partner/email/identities | Create sending identity |
| [**partnerEmailIdentitiesTypeValueVerifyPost**](PartnerEmailIdentitiesApi.md#partneremailidentitiestypevalueverifypost) | **POST** /partner/email/identities/{type}/{value}/verify | Verify identity |



## partnerEmailIdentitiesGet

> { [key: string]: any; } partnerEmailIdentitiesGet()

List sending identities

Returns every verified or pending sending identity (domains + verified email addresses) for the authenticated partner.

### Example

```ts
import {
  Configuration,
  PartnerEmailIdentitiesApi,
} from '';
import type { PartnerEmailIdentitiesGetRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: BearerAuth
    apiKey: "YOUR API KEY",
  });
  const api = new PartnerEmailIdentitiesApi(config);

  try {
    const data = await api.partnerEmailIdentitiesGet();
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
| **200** | { success: true, identities: [{type,value,status,...}] } |  -  |
| **401** | Missing/invalid API key |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## partnerEmailIdentitiesPost

> { [key: string]: any; } partnerEmailIdentitiesPost(body)

Create sending identity

Register a new sending identity. For DOMAIN type returns the SPF + DKIM CNAME + DMARC TXT records to publish; for EMAIL_ADDRESS type sends a one-time confirmation token.

### Example

```ts
import {
  Configuration,
  PartnerEmailIdentitiesApi,
} from '';
import type { PartnerEmailIdentitiesPostRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
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

Re-runs DNS verification (SPF + DKIM + DMARC checks) on a domain identity. Triggered after publishing the DNS records returned from CreateIdentity.

### Example

```ts
import {
  Configuration,
  PartnerEmailIdentitiesApi,
} from '';
import type { PartnerEmailIdentitiesTypeValueVerifyPostRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
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
| **429** | Rate-limited (1 verify-now per 60s) |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


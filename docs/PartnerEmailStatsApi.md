# PartnerEmailStatsApi

All URIs are relative to *https://apis.splashifypro.com/api/v1*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**partnerEmailQuotasGet**](PartnerEmailStatsApi.md#partneremailquotasget) | **GET** /partner/email/quotas | Get sending quotas |
| [**partnerEmailStatsGet**](PartnerEmailStatsApi.md#partneremailstatsget) | **GET** /partner/email/stats | Get sending statistics |



## partnerEmailQuotasGet

> { [key: string]: any; } partnerEmailQuotasGet()

Get sending quotas

Returns the partner\&#39;s daily send quota, peak send rate, sandbox flag, today\&#39;s send count, and reputation status. Mirrors AWS SES GetSendQuota.

### Example

```ts
import {
  Configuration,
  PartnerEmailStatsApi,
} from '';
import type { PartnerEmailQuotasGetRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: BearerAuth
    apiKey: "YOUR API KEY",
  });
  const api = new PartnerEmailStatsApi(config);

  try {
    const data = await api.partnerEmailQuotasGet();
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
| **200** | { success: true, quota: {...} } |  -  |
| **401** | Missing/invalid API key |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## partnerEmailStatsGet

> { [key: string]: any; } partnerEmailStatsGet(days, configSetId)

Get sending statistics

Day-by-day counters for sent / delivered / bounced / complained / opened / clicked / rejected over the last N days. Filterable by configuration set.

### Example

```ts
import {
  Configuration,
  PartnerEmailStatsApi,
} from '';
import type { PartnerEmailStatsGetRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: BearerAuth
    apiKey: "YOUR API KEY",
  });
  const api = new PartnerEmailStatsApi(config);

  const body = {
    // number | Window size (default 30, max 90) (optional)
    days: 56,
    // string | Filter to one configuration set (optional)
    configSetId: configSetId_example,
  } satisfies PartnerEmailStatsGetRequest;

  try {
    const data = await api.partnerEmailStatsGet(body);
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
| **days** | `number` | Window size (default 30, max 90) | [Optional] [Defaults to `undefined`] |
| **configSetId** | `string` | Filter to one configuration set | [Optional] [Defaults to `undefined`] |

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
| **200** | { success: true, stats: [{day_bucket, sent_count, ...}] } |  -  |
| **401** | Missing/invalid API key |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


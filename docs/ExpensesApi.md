# ExpensesApi

All URIs are relative to *https://apis.splashifypro.com/api/v1*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**appExpensesBillingLogsGet**](ExpensesApi.md#appexpensesbillinglogsget) | **GET** /app/expenses/billing-logs | Billing log entries |
| [**appExpensesSummaryGet**](ExpensesApi.md#appexpensessummaryget) | **GET** /app/expenses/summary | Expense summary |



## appExpensesBillingLogsGet

> { [key: string]: any; } appExpensesBillingLogsGet(period, limit, cursor)

Billing log entries

Paginated per-message deduction log. total is a real count of billable rows for the period, not the size of one page; page with cursor/next_cursor.

### Example

```ts
import {
  Configuration,
  ExpensesApi,
} from '@splashifypro/sdk';
import type { AppExpensesBillingLogsGetRequest } from '@splashifypro/sdk';

async function example() {
  console.log("🚀 Testing @splashifypro/sdk SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: BearerAuth
    apiKey: "YOUR API KEY",
  });
  const api = new ExpensesApi(config);

  const body = {
    // string | 7d, 30d, 3m, 6m, or all — default 30d (optional)
    period: period_example,
    // number | Page size, default 100, max 500 (optional)
    limit: 56,
    // string | Opaque cursor from a previous response\'s next_cursor (optional)
    cursor: cursor_example,
  } satisfies AppExpensesBillingLogsGetRequest;

  try {
    const data = await api.appExpensesBillingLogsGet(body);
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
| **period** | `string` | 7d, 30d, 3m, 6m, or all — default 30d | [Optional] [Defaults to `undefined`] |
| **limit** | `number` | Page size, default 100, max 500 | [Optional] [Defaults to `undefined`] |
| **cursor** | `string` | Opaque cursor from a previous response\&#39;s next_cursor | [Optional] [Defaults to `undefined`] |

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
| **200** | { success, logs, total, next_cursor } |  -  |
| **401** | Unauthorized |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## appExpensesSummaryGet

> { [key: string]: any; } appExpensesSummaryGet(period)

Expense summary

Message deduction stats: total spent, breakdown by category, total messages, and real sent/delivered counts from WhatsApp status (not the account\&#39;s billing-timing preference). period in the response is the resolved value, not the raw query param — an unrecognised value silently falls back to 30d.

### Example

```ts
import {
  Configuration,
  ExpensesApi,
} from '@splashifypro/sdk';
import type { AppExpensesSummaryGetRequest } from '@splashifypro/sdk';

async function example() {
  console.log("🚀 Testing @splashifypro/sdk SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: BearerAuth
    apiKey: "YOUR API KEY",
  });
  const api = new ExpensesApi(config);

  const body = {
    // string | 7d, 30d, 3m, 6m, or all — default 30d (optional)
    period: period_example,
  } satisfies AppExpensesSummaryGetRequest;

  try {
    const data = await api.appExpensesSummaryGet(body);
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
| **period** | `string` | 7d, 30d, 3m, 6m, or all — default 30d | [Optional] [Defaults to `undefined`] |

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
| **200** | OK |  -  |
| **401** | Unauthorized |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


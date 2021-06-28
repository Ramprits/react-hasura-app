import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
const defaultOptions =  {}
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  bpchar: any;
  bytea: any;
  date: any;
  smallint: any;
  timestamptz: any;
  uuid: any;
};


/** Boolean expression to compare columns of type "Float". All fields are combined with logical 'AND'. */
export type Float_Comparison_Exp = {
  _eq?: Maybe<Scalars['Float']>;
  _gt?: Maybe<Scalars['Float']>;
  _gte?: Maybe<Scalars['Float']>;
  _in?: Maybe<Array<Scalars['Float']>>;
  _is_null?: Maybe<Scalars['Boolean']>;
  _lt?: Maybe<Scalars['Float']>;
  _lte?: Maybe<Scalars['Float']>;
  _neq?: Maybe<Scalars['Float']>;
  _nin?: Maybe<Array<Scalars['Float']>>;
};

/** Boolean expression to compare columns of type "Int". All fields are combined with logical 'AND'. */
export type Int_Comparison_Exp = {
  _eq?: Maybe<Scalars['Int']>;
  _gt?: Maybe<Scalars['Int']>;
  _gte?: Maybe<Scalars['Int']>;
  _in?: Maybe<Array<Scalars['Int']>>;
  _is_null?: Maybe<Scalars['Boolean']>;
  _lt?: Maybe<Scalars['Int']>;
  _lte?: Maybe<Scalars['Int']>;
  _neq?: Maybe<Scalars['Int']>;
  _nin?: Maybe<Array<Scalars['Int']>>;
};

/** Boolean expression to compare columns of type "String". All fields are combined with logical 'AND'. */
export type String_Comparison_Exp = {
  _eq?: Maybe<Scalars['String']>;
  _gt?: Maybe<Scalars['String']>;
  _gte?: Maybe<Scalars['String']>;
  /** does the column match the given case-insensitive pattern */
  _ilike?: Maybe<Scalars['String']>;
  _in?: Maybe<Array<Scalars['String']>>;
  /** does the column match the given POSIX regular expression, case insensitive */
  _iregex?: Maybe<Scalars['String']>;
  _is_null?: Maybe<Scalars['Boolean']>;
  /** does the column match the given pattern */
  _like?: Maybe<Scalars['String']>;
  _lt?: Maybe<Scalars['String']>;
  _lte?: Maybe<Scalars['String']>;
  _neq?: Maybe<Scalars['String']>;
  /** does the column NOT match the given case-insensitive pattern */
  _nilike?: Maybe<Scalars['String']>;
  _nin?: Maybe<Array<Scalars['String']>>;
  /** does the column NOT match the given POSIX regular expression, case insensitive */
  _niregex?: Maybe<Scalars['String']>;
  /** does the column NOT match the given pattern */
  _nlike?: Maybe<Scalars['String']>;
  /** does the column NOT match the given POSIX regular expression, case sensitive */
  _nregex?: Maybe<Scalars['String']>;
  /** does the column NOT match the given SQL regular expression */
  _nsimilar?: Maybe<Scalars['String']>;
  /** does the column match the given POSIX regular expression, case sensitive */
  _regex?: Maybe<Scalars['String']>;
  /** does the column match the given SQL regular expression */
  _similar?: Maybe<Scalars['String']>;
};

/** columns and relationships of "address" */
export type Address = {
  __typename?: 'address';
  address_line_1: Scalars['String'];
  address_line_2: Scalars['String'];
  city_id?: Maybe<Scalars['uuid']>;
  country_id?: Maybe<Scalars['uuid']>;
  created_at: Scalars['timestamptz'];
  id: Scalars['uuid'];
  state_id?: Maybe<Scalars['uuid']>;
  street_address: Scalars['String'];
  updated_at: Scalars['timestamptz'];
  /** An array relationship */
  work_orders: Array<Work_Order>;
  /** An aggregate relationship */
  work_orders_aggregate: Work_Order_Aggregate;
};


/** columns and relationships of "address" */
export type AddressWork_OrdersArgs = {
  distinct_on?: Maybe<Array<Work_Order_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Work_Order_Order_By>>;
  where?: Maybe<Work_Order_Bool_Exp>;
};


/** columns and relationships of "address" */
export type AddressWork_Orders_AggregateArgs = {
  distinct_on?: Maybe<Array<Work_Order_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Work_Order_Order_By>>;
  where?: Maybe<Work_Order_Bool_Exp>;
};

/** aggregated selection of "address" */
export type Address_Aggregate = {
  __typename?: 'address_aggregate';
  aggregate?: Maybe<Address_Aggregate_Fields>;
  nodes: Array<Address>;
};

/** aggregate fields of "address" */
export type Address_Aggregate_Fields = {
  __typename?: 'address_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<Address_Max_Fields>;
  min?: Maybe<Address_Min_Fields>;
};


/** aggregate fields of "address" */
export type Address_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Address_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** Boolean expression to filter rows from the table "address". All fields are combined with a logical 'AND'. */
export type Address_Bool_Exp = {
  _and?: Maybe<Array<Address_Bool_Exp>>;
  _not?: Maybe<Address_Bool_Exp>;
  _or?: Maybe<Array<Address_Bool_Exp>>;
  address_line_1?: Maybe<String_Comparison_Exp>;
  address_line_2?: Maybe<String_Comparison_Exp>;
  city_id?: Maybe<Uuid_Comparison_Exp>;
  country_id?: Maybe<Uuid_Comparison_Exp>;
  created_at?: Maybe<Timestamptz_Comparison_Exp>;
  id?: Maybe<Uuid_Comparison_Exp>;
  state_id?: Maybe<Uuid_Comparison_Exp>;
  street_address?: Maybe<String_Comparison_Exp>;
  updated_at?: Maybe<Timestamptz_Comparison_Exp>;
  work_orders?: Maybe<Work_Order_Bool_Exp>;
};

/** unique or primary key constraints on table "address" */
export enum Address_Constraint {
  /** unique or primary key constraint */
  AddressPkey = 'address_pkey'
}

/** input type for inserting data into table "address" */
export type Address_Insert_Input = {
  address_line_1?: Maybe<Scalars['String']>;
  address_line_2?: Maybe<Scalars['String']>;
  city_id?: Maybe<Scalars['uuid']>;
  country_id?: Maybe<Scalars['uuid']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['uuid']>;
  state_id?: Maybe<Scalars['uuid']>;
  street_address?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
  work_orders?: Maybe<Work_Order_Arr_Rel_Insert_Input>;
};

/** aggregate max on columns */
export type Address_Max_Fields = {
  __typename?: 'address_max_fields';
  address_line_1?: Maybe<Scalars['String']>;
  address_line_2?: Maybe<Scalars['String']>;
  city_id?: Maybe<Scalars['uuid']>;
  country_id?: Maybe<Scalars['uuid']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['uuid']>;
  state_id?: Maybe<Scalars['uuid']>;
  street_address?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** aggregate min on columns */
export type Address_Min_Fields = {
  __typename?: 'address_min_fields';
  address_line_1?: Maybe<Scalars['String']>;
  address_line_2?: Maybe<Scalars['String']>;
  city_id?: Maybe<Scalars['uuid']>;
  country_id?: Maybe<Scalars['uuid']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['uuid']>;
  state_id?: Maybe<Scalars['uuid']>;
  street_address?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** response of any mutation on the table "address" */
export type Address_Mutation_Response = {
  __typename?: 'address_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Address>;
};

/** input type for inserting object relation for remote table "address" */
export type Address_Obj_Rel_Insert_Input = {
  data: Address_Insert_Input;
  /** on conflict condition */
  on_conflict?: Maybe<Address_On_Conflict>;
};

/** on conflict condition type for table "address" */
export type Address_On_Conflict = {
  constraint: Address_Constraint;
  update_columns?: Array<Address_Update_Column>;
  where?: Maybe<Address_Bool_Exp>;
};

/** Ordering options when selecting data from "address". */
export type Address_Order_By = {
  address_line_1?: Maybe<Order_By>;
  address_line_2?: Maybe<Order_By>;
  city_id?: Maybe<Order_By>;
  country_id?: Maybe<Order_By>;
  created_at?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  state_id?: Maybe<Order_By>;
  street_address?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
  work_orders_aggregate?: Maybe<Work_Order_Aggregate_Order_By>;
};

/** primary key columns input for table: address */
export type Address_Pk_Columns_Input = {
  id: Scalars['uuid'];
};

/** select columns of table "address" */
export enum Address_Select_Column {
  /** column name */
  AddressLine_1 = 'address_line_1',
  /** column name */
  AddressLine_2 = 'address_line_2',
  /** column name */
  CityId = 'city_id',
  /** column name */
  CountryId = 'country_id',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  StateId = 'state_id',
  /** column name */
  StreetAddress = 'street_address',
  /** column name */
  UpdatedAt = 'updated_at'
}

/** input type for updating data in table "address" */
export type Address_Set_Input = {
  address_line_1?: Maybe<Scalars['String']>;
  address_line_2?: Maybe<Scalars['String']>;
  city_id?: Maybe<Scalars['uuid']>;
  country_id?: Maybe<Scalars['uuid']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['uuid']>;
  state_id?: Maybe<Scalars['uuid']>;
  street_address?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** update columns of table "address" */
export enum Address_Update_Column {
  /** column name */
  AddressLine_1 = 'address_line_1',
  /** column name */
  AddressLine_2 = 'address_line_2',
  /** column name */
  CityId = 'city_id',
  /** column name */
  CountryId = 'country_id',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  StateId = 'state_id',
  /** column name */
  StreetAddress = 'street_address',
  /** column name */
  UpdatedAt = 'updated_at'
}


/** Boolean expression to compare columns of type "bpchar". All fields are combined with logical 'AND'. */
export type Bpchar_Comparison_Exp = {
  _eq?: Maybe<Scalars['bpchar']>;
  _gt?: Maybe<Scalars['bpchar']>;
  _gte?: Maybe<Scalars['bpchar']>;
  /** does the column match the given case-insensitive pattern */
  _ilike?: Maybe<Scalars['bpchar']>;
  _in?: Maybe<Array<Scalars['bpchar']>>;
  /** does the column match the given POSIX regular expression, case insensitive */
  _iregex?: Maybe<Scalars['bpchar']>;
  _is_null?: Maybe<Scalars['Boolean']>;
  /** does the column match the given pattern */
  _like?: Maybe<Scalars['bpchar']>;
  _lt?: Maybe<Scalars['bpchar']>;
  _lte?: Maybe<Scalars['bpchar']>;
  _neq?: Maybe<Scalars['bpchar']>;
  /** does the column NOT match the given case-insensitive pattern */
  _nilike?: Maybe<Scalars['bpchar']>;
  _nin?: Maybe<Array<Scalars['bpchar']>>;
  /** does the column NOT match the given POSIX regular expression, case insensitive */
  _niregex?: Maybe<Scalars['bpchar']>;
  /** does the column NOT match the given pattern */
  _nlike?: Maybe<Scalars['bpchar']>;
  /** does the column NOT match the given POSIX regular expression, case sensitive */
  _nregex?: Maybe<Scalars['bpchar']>;
  /** does the column NOT match the given SQL regular expression */
  _nsimilar?: Maybe<Scalars['bpchar']>;
  /** does the column match the given POSIX regular expression, case sensitive */
  _regex?: Maybe<Scalars['bpchar']>;
  /** does the column match the given SQL regular expression */
  _similar?: Maybe<Scalars['bpchar']>;
};


/** Boolean expression to compare columns of type "bytea". All fields are combined with logical 'AND'. */
export type Bytea_Comparison_Exp = {
  _eq?: Maybe<Scalars['bytea']>;
  _gt?: Maybe<Scalars['bytea']>;
  _gte?: Maybe<Scalars['bytea']>;
  _in?: Maybe<Array<Scalars['bytea']>>;
  _is_null?: Maybe<Scalars['Boolean']>;
  _lt?: Maybe<Scalars['bytea']>;
  _lte?: Maybe<Scalars['bytea']>;
  _neq?: Maybe<Scalars['bytea']>;
  _nin?: Maybe<Array<Scalars['bytea']>>;
};

/** columns and relationships of "categories" */
export type Categories = {
  __typename?: 'categories';
  category_id: Scalars['smallint'];
  category_name: Scalars['String'];
  description?: Maybe<Scalars['String']>;
  picture?: Maybe<Scalars['bytea']>;
  /** An array relationship */
  products: Array<Products>;
  /** An aggregate relationship */
  products_aggregate: Products_Aggregate;
};


/** columns and relationships of "categories" */
export type CategoriesProductsArgs = {
  distinct_on?: Maybe<Array<Products_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Products_Order_By>>;
  where?: Maybe<Products_Bool_Exp>;
};


/** columns and relationships of "categories" */
export type CategoriesProducts_AggregateArgs = {
  distinct_on?: Maybe<Array<Products_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Products_Order_By>>;
  where?: Maybe<Products_Bool_Exp>;
};

/** aggregated selection of "categories" */
export type Categories_Aggregate = {
  __typename?: 'categories_aggregate';
  aggregate?: Maybe<Categories_Aggregate_Fields>;
  nodes: Array<Categories>;
};

/** aggregate fields of "categories" */
export type Categories_Aggregate_Fields = {
  __typename?: 'categories_aggregate_fields';
  avg?: Maybe<Categories_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Categories_Max_Fields>;
  min?: Maybe<Categories_Min_Fields>;
  stddev?: Maybe<Categories_Stddev_Fields>;
  stddev_pop?: Maybe<Categories_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Categories_Stddev_Samp_Fields>;
  sum?: Maybe<Categories_Sum_Fields>;
  var_pop?: Maybe<Categories_Var_Pop_Fields>;
  var_samp?: Maybe<Categories_Var_Samp_Fields>;
  variance?: Maybe<Categories_Variance_Fields>;
};


/** aggregate fields of "categories" */
export type Categories_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Categories_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** aggregate avg on columns */
export type Categories_Avg_Fields = {
  __typename?: 'categories_avg_fields';
  category_id?: Maybe<Scalars['Float']>;
};

/** Boolean expression to filter rows from the table "categories". All fields are combined with a logical 'AND'. */
export type Categories_Bool_Exp = {
  _and?: Maybe<Array<Categories_Bool_Exp>>;
  _not?: Maybe<Categories_Bool_Exp>;
  _or?: Maybe<Array<Categories_Bool_Exp>>;
  category_id?: Maybe<Smallint_Comparison_Exp>;
  category_name?: Maybe<String_Comparison_Exp>;
  description?: Maybe<String_Comparison_Exp>;
  picture?: Maybe<Bytea_Comparison_Exp>;
  products?: Maybe<Products_Bool_Exp>;
};

/** unique or primary key constraints on table "categories" */
export enum Categories_Constraint {
  /** unique or primary key constraint */
  PkCategories = 'pk_categories'
}

/** input type for incrementing numeric columns in table "categories" */
export type Categories_Inc_Input = {
  category_id?: Maybe<Scalars['smallint']>;
};

/** input type for inserting data into table "categories" */
export type Categories_Insert_Input = {
  category_id?: Maybe<Scalars['smallint']>;
  category_name?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  picture?: Maybe<Scalars['bytea']>;
  products?: Maybe<Products_Arr_Rel_Insert_Input>;
};

/** aggregate max on columns */
export type Categories_Max_Fields = {
  __typename?: 'categories_max_fields';
  category_id?: Maybe<Scalars['smallint']>;
  category_name?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
};

/** aggregate min on columns */
export type Categories_Min_Fields = {
  __typename?: 'categories_min_fields';
  category_id?: Maybe<Scalars['smallint']>;
  category_name?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
};

/** response of any mutation on the table "categories" */
export type Categories_Mutation_Response = {
  __typename?: 'categories_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Categories>;
};

/** input type for inserting object relation for remote table "categories" */
export type Categories_Obj_Rel_Insert_Input = {
  data: Categories_Insert_Input;
  /** on conflict condition */
  on_conflict?: Maybe<Categories_On_Conflict>;
};

/** on conflict condition type for table "categories" */
export type Categories_On_Conflict = {
  constraint: Categories_Constraint;
  update_columns?: Array<Categories_Update_Column>;
  where?: Maybe<Categories_Bool_Exp>;
};

/** Ordering options when selecting data from "categories". */
export type Categories_Order_By = {
  category_id?: Maybe<Order_By>;
  category_name?: Maybe<Order_By>;
  description?: Maybe<Order_By>;
  picture?: Maybe<Order_By>;
  products_aggregate?: Maybe<Products_Aggregate_Order_By>;
};

/** primary key columns input for table: categories */
export type Categories_Pk_Columns_Input = {
  category_id: Scalars['smallint'];
};

/** select columns of table "categories" */
export enum Categories_Select_Column {
  /** column name */
  CategoryId = 'category_id',
  /** column name */
  CategoryName = 'category_name',
  /** column name */
  Description = 'description',
  /** column name */
  Picture = 'picture'
}

/** input type for updating data in table "categories" */
export type Categories_Set_Input = {
  category_id?: Maybe<Scalars['smallint']>;
  category_name?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  picture?: Maybe<Scalars['bytea']>;
};

/** aggregate stddev on columns */
export type Categories_Stddev_Fields = {
  __typename?: 'categories_stddev_fields';
  category_id?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_pop on columns */
export type Categories_Stddev_Pop_Fields = {
  __typename?: 'categories_stddev_pop_fields';
  category_id?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_samp on columns */
export type Categories_Stddev_Samp_Fields = {
  __typename?: 'categories_stddev_samp_fields';
  category_id?: Maybe<Scalars['Float']>;
};

/** aggregate sum on columns */
export type Categories_Sum_Fields = {
  __typename?: 'categories_sum_fields';
  category_id?: Maybe<Scalars['smallint']>;
};

/** update columns of table "categories" */
export enum Categories_Update_Column {
  /** column name */
  CategoryId = 'category_id',
  /** column name */
  CategoryName = 'category_name',
  /** column name */
  Description = 'description',
  /** column name */
  Picture = 'picture'
}

/** aggregate var_pop on columns */
export type Categories_Var_Pop_Fields = {
  __typename?: 'categories_var_pop_fields';
  category_id?: Maybe<Scalars['Float']>;
};

/** aggregate var_samp on columns */
export type Categories_Var_Samp_Fields = {
  __typename?: 'categories_var_samp_fields';
  category_id?: Maybe<Scalars['Float']>;
};

/** aggregate variance on columns */
export type Categories_Variance_Fields = {
  __typename?: 'categories_variance_fields';
  category_id?: Maybe<Scalars['Float']>;
};

/** columns and relationships of "customer_customer_demo" */
export type Customer_Customer_Demo = {
  __typename?: 'customer_customer_demo';
  /** An object relationship */
  customer: Customers;
  /** An object relationship */
  customer_demographic: Customer_Demographics;
  customer_id: Scalars['bpchar'];
  customer_type_id: Scalars['bpchar'];
};

/** aggregated selection of "customer_customer_demo" */
export type Customer_Customer_Demo_Aggregate = {
  __typename?: 'customer_customer_demo_aggregate';
  aggregate?: Maybe<Customer_Customer_Demo_Aggregate_Fields>;
  nodes: Array<Customer_Customer_Demo>;
};

/** aggregate fields of "customer_customer_demo" */
export type Customer_Customer_Demo_Aggregate_Fields = {
  __typename?: 'customer_customer_demo_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<Customer_Customer_Demo_Max_Fields>;
  min?: Maybe<Customer_Customer_Demo_Min_Fields>;
};


/** aggregate fields of "customer_customer_demo" */
export type Customer_Customer_Demo_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Customer_Customer_Demo_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "customer_customer_demo" */
export type Customer_Customer_Demo_Aggregate_Order_By = {
  count?: Maybe<Order_By>;
  max?: Maybe<Customer_Customer_Demo_Max_Order_By>;
  min?: Maybe<Customer_Customer_Demo_Min_Order_By>;
};

/** input type for inserting array relation for remote table "customer_customer_demo" */
export type Customer_Customer_Demo_Arr_Rel_Insert_Input = {
  data: Array<Customer_Customer_Demo_Insert_Input>;
  /** on conflict condition */
  on_conflict?: Maybe<Customer_Customer_Demo_On_Conflict>;
};

/** Boolean expression to filter rows from the table "customer_customer_demo". All fields are combined with a logical 'AND'. */
export type Customer_Customer_Demo_Bool_Exp = {
  _and?: Maybe<Array<Customer_Customer_Demo_Bool_Exp>>;
  _not?: Maybe<Customer_Customer_Demo_Bool_Exp>;
  _or?: Maybe<Array<Customer_Customer_Demo_Bool_Exp>>;
  customer?: Maybe<Customers_Bool_Exp>;
  customer_demographic?: Maybe<Customer_Demographics_Bool_Exp>;
  customer_id?: Maybe<Bpchar_Comparison_Exp>;
  customer_type_id?: Maybe<Bpchar_Comparison_Exp>;
};

/** unique or primary key constraints on table "customer_customer_demo" */
export enum Customer_Customer_Demo_Constraint {
  /** unique or primary key constraint */
  PkCustomerCustomerDemo = 'pk_customer_customer_demo'
}

/** input type for inserting data into table "customer_customer_demo" */
export type Customer_Customer_Demo_Insert_Input = {
  customer?: Maybe<Customers_Obj_Rel_Insert_Input>;
  customer_demographic?: Maybe<Customer_Demographics_Obj_Rel_Insert_Input>;
  customer_id?: Maybe<Scalars['bpchar']>;
  customer_type_id?: Maybe<Scalars['bpchar']>;
};

/** aggregate max on columns */
export type Customer_Customer_Demo_Max_Fields = {
  __typename?: 'customer_customer_demo_max_fields';
  customer_id?: Maybe<Scalars['bpchar']>;
  customer_type_id?: Maybe<Scalars['bpchar']>;
};

/** order by max() on columns of table "customer_customer_demo" */
export type Customer_Customer_Demo_Max_Order_By = {
  customer_id?: Maybe<Order_By>;
  customer_type_id?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type Customer_Customer_Demo_Min_Fields = {
  __typename?: 'customer_customer_demo_min_fields';
  customer_id?: Maybe<Scalars['bpchar']>;
  customer_type_id?: Maybe<Scalars['bpchar']>;
};

/** order by min() on columns of table "customer_customer_demo" */
export type Customer_Customer_Demo_Min_Order_By = {
  customer_id?: Maybe<Order_By>;
  customer_type_id?: Maybe<Order_By>;
};

/** response of any mutation on the table "customer_customer_demo" */
export type Customer_Customer_Demo_Mutation_Response = {
  __typename?: 'customer_customer_demo_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Customer_Customer_Demo>;
};

/** on conflict condition type for table "customer_customer_demo" */
export type Customer_Customer_Demo_On_Conflict = {
  constraint: Customer_Customer_Demo_Constraint;
  update_columns?: Array<Customer_Customer_Demo_Update_Column>;
  where?: Maybe<Customer_Customer_Demo_Bool_Exp>;
};

/** Ordering options when selecting data from "customer_customer_demo". */
export type Customer_Customer_Demo_Order_By = {
  customer?: Maybe<Customers_Order_By>;
  customer_demographic?: Maybe<Customer_Demographics_Order_By>;
  customer_id?: Maybe<Order_By>;
  customer_type_id?: Maybe<Order_By>;
};

/** primary key columns input for table: customer_customer_demo */
export type Customer_Customer_Demo_Pk_Columns_Input = {
  customer_id: Scalars['bpchar'];
  customer_type_id: Scalars['bpchar'];
};

/** select columns of table "customer_customer_demo" */
export enum Customer_Customer_Demo_Select_Column {
  /** column name */
  CustomerId = 'customer_id',
  /** column name */
  CustomerTypeId = 'customer_type_id'
}

/** input type for updating data in table "customer_customer_demo" */
export type Customer_Customer_Demo_Set_Input = {
  customer_id?: Maybe<Scalars['bpchar']>;
  customer_type_id?: Maybe<Scalars['bpchar']>;
};

/** update columns of table "customer_customer_demo" */
export enum Customer_Customer_Demo_Update_Column {
  /** column name */
  CustomerId = 'customer_id',
  /** column name */
  CustomerTypeId = 'customer_type_id'
}

/** columns and relationships of "customer_demographics" */
export type Customer_Demographics = {
  __typename?: 'customer_demographics';
  /** An array relationship */
  customer_customer_demos: Array<Customer_Customer_Demo>;
  /** An aggregate relationship */
  customer_customer_demos_aggregate: Customer_Customer_Demo_Aggregate;
  customer_desc?: Maybe<Scalars['String']>;
  customer_type_id: Scalars['bpchar'];
};


/** columns and relationships of "customer_demographics" */
export type Customer_DemographicsCustomer_Customer_DemosArgs = {
  distinct_on?: Maybe<Array<Customer_Customer_Demo_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Customer_Customer_Demo_Order_By>>;
  where?: Maybe<Customer_Customer_Demo_Bool_Exp>;
};


/** columns and relationships of "customer_demographics" */
export type Customer_DemographicsCustomer_Customer_Demos_AggregateArgs = {
  distinct_on?: Maybe<Array<Customer_Customer_Demo_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Customer_Customer_Demo_Order_By>>;
  where?: Maybe<Customer_Customer_Demo_Bool_Exp>;
};

/** aggregated selection of "customer_demographics" */
export type Customer_Demographics_Aggregate = {
  __typename?: 'customer_demographics_aggregate';
  aggregate?: Maybe<Customer_Demographics_Aggregate_Fields>;
  nodes: Array<Customer_Demographics>;
};

/** aggregate fields of "customer_demographics" */
export type Customer_Demographics_Aggregate_Fields = {
  __typename?: 'customer_demographics_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<Customer_Demographics_Max_Fields>;
  min?: Maybe<Customer_Demographics_Min_Fields>;
};


/** aggregate fields of "customer_demographics" */
export type Customer_Demographics_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Customer_Demographics_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** Boolean expression to filter rows from the table "customer_demographics". All fields are combined with a logical 'AND'. */
export type Customer_Demographics_Bool_Exp = {
  _and?: Maybe<Array<Customer_Demographics_Bool_Exp>>;
  _not?: Maybe<Customer_Demographics_Bool_Exp>;
  _or?: Maybe<Array<Customer_Demographics_Bool_Exp>>;
  customer_customer_demos?: Maybe<Customer_Customer_Demo_Bool_Exp>;
  customer_desc?: Maybe<String_Comparison_Exp>;
  customer_type_id?: Maybe<Bpchar_Comparison_Exp>;
};

/** unique or primary key constraints on table "customer_demographics" */
export enum Customer_Demographics_Constraint {
  /** unique or primary key constraint */
  PkCustomerDemographics = 'pk_customer_demographics'
}

/** input type for inserting data into table "customer_demographics" */
export type Customer_Demographics_Insert_Input = {
  customer_customer_demos?: Maybe<Customer_Customer_Demo_Arr_Rel_Insert_Input>;
  customer_desc?: Maybe<Scalars['String']>;
  customer_type_id?: Maybe<Scalars['bpchar']>;
};

/** aggregate max on columns */
export type Customer_Demographics_Max_Fields = {
  __typename?: 'customer_demographics_max_fields';
  customer_desc?: Maybe<Scalars['String']>;
  customer_type_id?: Maybe<Scalars['bpchar']>;
};

/** aggregate min on columns */
export type Customer_Demographics_Min_Fields = {
  __typename?: 'customer_demographics_min_fields';
  customer_desc?: Maybe<Scalars['String']>;
  customer_type_id?: Maybe<Scalars['bpchar']>;
};

/** response of any mutation on the table "customer_demographics" */
export type Customer_Demographics_Mutation_Response = {
  __typename?: 'customer_demographics_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Customer_Demographics>;
};

/** input type for inserting object relation for remote table "customer_demographics" */
export type Customer_Demographics_Obj_Rel_Insert_Input = {
  data: Customer_Demographics_Insert_Input;
  /** on conflict condition */
  on_conflict?: Maybe<Customer_Demographics_On_Conflict>;
};

/** on conflict condition type for table "customer_demographics" */
export type Customer_Demographics_On_Conflict = {
  constraint: Customer_Demographics_Constraint;
  update_columns?: Array<Customer_Demographics_Update_Column>;
  where?: Maybe<Customer_Demographics_Bool_Exp>;
};

/** Ordering options when selecting data from "customer_demographics". */
export type Customer_Demographics_Order_By = {
  customer_customer_demos_aggregate?: Maybe<Customer_Customer_Demo_Aggregate_Order_By>;
  customer_desc?: Maybe<Order_By>;
  customer_type_id?: Maybe<Order_By>;
};

/** primary key columns input for table: customer_demographics */
export type Customer_Demographics_Pk_Columns_Input = {
  customer_type_id: Scalars['bpchar'];
};

/** select columns of table "customer_demographics" */
export enum Customer_Demographics_Select_Column {
  /** column name */
  CustomerDesc = 'customer_desc',
  /** column name */
  CustomerTypeId = 'customer_type_id'
}

/** input type for updating data in table "customer_demographics" */
export type Customer_Demographics_Set_Input = {
  customer_desc?: Maybe<Scalars['String']>;
  customer_type_id?: Maybe<Scalars['bpchar']>;
};

/** update columns of table "customer_demographics" */
export enum Customer_Demographics_Update_Column {
  /** column name */
  CustomerDesc = 'customer_desc',
  /** column name */
  CustomerTypeId = 'customer_type_id'
}

/** columns and relationships of "customers" */
export type Customers = {
  __typename?: 'customers';
  address?: Maybe<Scalars['String']>;
  city?: Maybe<Scalars['String']>;
  company_name: Scalars['String'];
  contact_name?: Maybe<Scalars['String']>;
  contact_title?: Maybe<Scalars['String']>;
  country?: Maybe<Scalars['String']>;
  /** An array relationship */
  customer_customer_demos: Array<Customer_Customer_Demo>;
  /** An aggregate relationship */
  customer_customer_demos_aggregate: Customer_Customer_Demo_Aggregate;
  customer_id: Scalars['bpchar'];
  fax?: Maybe<Scalars['String']>;
  /** fetch data from the table: "orders" */
  orders: Array<Orders>;
  /** An aggregate relationship */
  orders_aggregate: Orders_Aggregate;
  phone?: Maybe<Scalars['String']>;
  postal_code?: Maybe<Scalars['String']>;
  region?: Maybe<Scalars['String']>;
};


/** columns and relationships of "customers" */
export type CustomersCustomer_Customer_DemosArgs = {
  distinct_on?: Maybe<Array<Customer_Customer_Demo_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Customer_Customer_Demo_Order_By>>;
  where?: Maybe<Customer_Customer_Demo_Bool_Exp>;
};


/** columns and relationships of "customers" */
export type CustomersCustomer_Customer_Demos_AggregateArgs = {
  distinct_on?: Maybe<Array<Customer_Customer_Demo_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Customer_Customer_Demo_Order_By>>;
  where?: Maybe<Customer_Customer_Demo_Bool_Exp>;
};


/** columns and relationships of "customers" */
export type CustomersOrdersArgs = {
  distinct_on?: Maybe<Array<Orders_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Orders_Order_By>>;
  where?: Maybe<Orders_Bool_Exp>;
};


/** columns and relationships of "customers" */
export type CustomersOrders_AggregateArgs = {
  distinct_on?: Maybe<Array<Orders_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Orders_Order_By>>;
  where?: Maybe<Orders_Bool_Exp>;
};

/** aggregated selection of "customers" */
export type Customers_Aggregate = {
  __typename?: 'customers_aggregate';
  aggregate?: Maybe<Customers_Aggregate_Fields>;
  nodes: Array<Customers>;
};

/** aggregate fields of "customers" */
export type Customers_Aggregate_Fields = {
  __typename?: 'customers_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<Customers_Max_Fields>;
  min?: Maybe<Customers_Min_Fields>;
};


/** aggregate fields of "customers" */
export type Customers_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Customers_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** Boolean expression to filter rows from the table "customers". All fields are combined with a logical 'AND'. */
export type Customers_Bool_Exp = {
  _and?: Maybe<Array<Customers_Bool_Exp>>;
  _not?: Maybe<Customers_Bool_Exp>;
  _or?: Maybe<Array<Customers_Bool_Exp>>;
  address?: Maybe<String_Comparison_Exp>;
  city?: Maybe<String_Comparison_Exp>;
  company_name?: Maybe<String_Comparison_Exp>;
  contact_name?: Maybe<String_Comparison_Exp>;
  contact_title?: Maybe<String_Comparison_Exp>;
  country?: Maybe<String_Comparison_Exp>;
  customer_customer_demos?: Maybe<Customer_Customer_Demo_Bool_Exp>;
  customer_id?: Maybe<Bpchar_Comparison_Exp>;
  fax?: Maybe<String_Comparison_Exp>;
  orders?: Maybe<Orders_Bool_Exp>;
  phone?: Maybe<String_Comparison_Exp>;
  postal_code?: Maybe<String_Comparison_Exp>;
  region?: Maybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "customers" */
export enum Customers_Constraint {
  /** unique or primary key constraint */
  PkCustomers = 'pk_customers'
}

/** input type for inserting data into table "customers" */
export type Customers_Insert_Input = {
  address?: Maybe<Scalars['String']>;
  city?: Maybe<Scalars['String']>;
  company_name?: Maybe<Scalars['String']>;
  contact_name?: Maybe<Scalars['String']>;
  contact_title?: Maybe<Scalars['String']>;
  country?: Maybe<Scalars['String']>;
  customer_customer_demos?: Maybe<Customer_Customer_Demo_Arr_Rel_Insert_Input>;
  customer_id?: Maybe<Scalars['bpchar']>;
  fax?: Maybe<Scalars['String']>;
  orders?: Maybe<Orders_Arr_Rel_Insert_Input>;
  phone?: Maybe<Scalars['String']>;
  postal_code?: Maybe<Scalars['String']>;
  region?: Maybe<Scalars['String']>;
};

/** aggregate max on columns */
export type Customers_Max_Fields = {
  __typename?: 'customers_max_fields';
  address?: Maybe<Scalars['String']>;
  city?: Maybe<Scalars['String']>;
  company_name?: Maybe<Scalars['String']>;
  contact_name?: Maybe<Scalars['String']>;
  contact_title?: Maybe<Scalars['String']>;
  country?: Maybe<Scalars['String']>;
  customer_id?: Maybe<Scalars['bpchar']>;
  fax?: Maybe<Scalars['String']>;
  phone?: Maybe<Scalars['String']>;
  postal_code?: Maybe<Scalars['String']>;
  region?: Maybe<Scalars['String']>;
};

/** aggregate min on columns */
export type Customers_Min_Fields = {
  __typename?: 'customers_min_fields';
  address?: Maybe<Scalars['String']>;
  city?: Maybe<Scalars['String']>;
  company_name?: Maybe<Scalars['String']>;
  contact_name?: Maybe<Scalars['String']>;
  contact_title?: Maybe<Scalars['String']>;
  country?: Maybe<Scalars['String']>;
  customer_id?: Maybe<Scalars['bpchar']>;
  fax?: Maybe<Scalars['String']>;
  phone?: Maybe<Scalars['String']>;
  postal_code?: Maybe<Scalars['String']>;
  region?: Maybe<Scalars['String']>;
};

/** response of any mutation on the table "customers" */
export type Customers_Mutation_Response = {
  __typename?: 'customers_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Customers>;
};

/** input type for inserting object relation for remote table "customers" */
export type Customers_Obj_Rel_Insert_Input = {
  data: Customers_Insert_Input;
  /** on conflict condition */
  on_conflict?: Maybe<Customers_On_Conflict>;
};

/** on conflict condition type for table "customers" */
export type Customers_On_Conflict = {
  constraint: Customers_Constraint;
  update_columns?: Array<Customers_Update_Column>;
  where?: Maybe<Customers_Bool_Exp>;
};

/** Ordering options when selecting data from "customers". */
export type Customers_Order_By = {
  address?: Maybe<Order_By>;
  city?: Maybe<Order_By>;
  company_name?: Maybe<Order_By>;
  contact_name?: Maybe<Order_By>;
  contact_title?: Maybe<Order_By>;
  country?: Maybe<Order_By>;
  customer_customer_demos_aggregate?: Maybe<Customer_Customer_Demo_Aggregate_Order_By>;
  customer_id?: Maybe<Order_By>;
  fax?: Maybe<Order_By>;
  orders_aggregate?: Maybe<Orders_Aggregate_Order_By>;
  phone?: Maybe<Order_By>;
  postal_code?: Maybe<Order_By>;
  region?: Maybe<Order_By>;
};

/** primary key columns input for table: customers */
export type Customers_Pk_Columns_Input = {
  customer_id: Scalars['bpchar'];
};

/** select columns of table "customers" */
export enum Customers_Select_Column {
  /** column name */
  Address = 'address',
  /** column name */
  City = 'city',
  /** column name */
  CompanyName = 'company_name',
  /** column name */
  ContactName = 'contact_name',
  /** column name */
  ContactTitle = 'contact_title',
  /** column name */
  Country = 'country',
  /** column name */
  CustomerId = 'customer_id',
  /** column name */
  Fax = 'fax',
  /** column name */
  Phone = 'phone',
  /** column name */
  PostalCode = 'postal_code',
  /** column name */
  Region = 'region'
}

/** input type for updating data in table "customers" */
export type Customers_Set_Input = {
  address?: Maybe<Scalars['String']>;
  city?: Maybe<Scalars['String']>;
  company_name?: Maybe<Scalars['String']>;
  contact_name?: Maybe<Scalars['String']>;
  contact_title?: Maybe<Scalars['String']>;
  country?: Maybe<Scalars['String']>;
  customer_id?: Maybe<Scalars['bpchar']>;
  fax?: Maybe<Scalars['String']>;
  phone?: Maybe<Scalars['String']>;
  postal_code?: Maybe<Scalars['String']>;
  region?: Maybe<Scalars['String']>;
};

/** update columns of table "customers" */
export enum Customers_Update_Column {
  /** column name */
  Address = 'address',
  /** column name */
  City = 'city',
  /** column name */
  CompanyName = 'company_name',
  /** column name */
  ContactName = 'contact_name',
  /** column name */
  ContactTitle = 'contact_title',
  /** column name */
  Country = 'country',
  /** column name */
  CustomerId = 'customer_id',
  /** column name */
  Fax = 'fax',
  /** column name */
  Phone = 'phone',
  /** column name */
  PostalCode = 'postal_code',
  /** column name */
  Region = 'region'
}


/** Boolean expression to compare columns of type "date". All fields are combined with logical 'AND'. */
export type Date_Comparison_Exp = {
  _eq?: Maybe<Scalars['date']>;
  _gt?: Maybe<Scalars['date']>;
  _gte?: Maybe<Scalars['date']>;
  _in?: Maybe<Array<Scalars['date']>>;
  _is_null?: Maybe<Scalars['Boolean']>;
  _lt?: Maybe<Scalars['date']>;
  _lte?: Maybe<Scalars['date']>;
  _neq?: Maybe<Scalars['date']>;
  _nin?: Maybe<Array<Scalars['date']>>;
};

/** columns and relationships of "employee_territories" */
export type Employee_Territories = {
  __typename?: 'employee_territories';
  /** An object relationship */
  employee: Employees;
  employee_id: Scalars['smallint'];
  /** An object relationship */
  territory: Territories;
  territory_id: Scalars['String'];
};

/** aggregated selection of "employee_territories" */
export type Employee_Territories_Aggregate = {
  __typename?: 'employee_territories_aggregate';
  aggregate?: Maybe<Employee_Territories_Aggregate_Fields>;
  nodes: Array<Employee_Territories>;
};

/** aggregate fields of "employee_territories" */
export type Employee_Territories_Aggregate_Fields = {
  __typename?: 'employee_territories_aggregate_fields';
  avg?: Maybe<Employee_Territories_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Employee_Territories_Max_Fields>;
  min?: Maybe<Employee_Territories_Min_Fields>;
  stddev?: Maybe<Employee_Territories_Stddev_Fields>;
  stddev_pop?: Maybe<Employee_Territories_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Employee_Territories_Stddev_Samp_Fields>;
  sum?: Maybe<Employee_Territories_Sum_Fields>;
  var_pop?: Maybe<Employee_Territories_Var_Pop_Fields>;
  var_samp?: Maybe<Employee_Territories_Var_Samp_Fields>;
  variance?: Maybe<Employee_Territories_Variance_Fields>;
};


/** aggregate fields of "employee_territories" */
export type Employee_Territories_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Employee_Territories_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "employee_territories" */
export type Employee_Territories_Aggregate_Order_By = {
  avg?: Maybe<Employee_Territories_Avg_Order_By>;
  count?: Maybe<Order_By>;
  max?: Maybe<Employee_Territories_Max_Order_By>;
  min?: Maybe<Employee_Territories_Min_Order_By>;
  stddev?: Maybe<Employee_Territories_Stddev_Order_By>;
  stddev_pop?: Maybe<Employee_Territories_Stddev_Pop_Order_By>;
  stddev_samp?: Maybe<Employee_Territories_Stddev_Samp_Order_By>;
  sum?: Maybe<Employee_Territories_Sum_Order_By>;
  var_pop?: Maybe<Employee_Territories_Var_Pop_Order_By>;
  var_samp?: Maybe<Employee_Territories_Var_Samp_Order_By>;
  variance?: Maybe<Employee_Territories_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "employee_territories" */
export type Employee_Territories_Arr_Rel_Insert_Input = {
  data: Array<Employee_Territories_Insert_Input>;
  /** on conflict condition */
  on_conflict?: Maybe<Employee_Territories_On_Conflict>;
};

/** aggregate avg on columns */
export type Employee_Territories_Avg_Fields = {
  __typename?: 'employee_territories_avg_fields';
  employee_id?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "employee_territories" */
export type Employee_Territories_Avg_Order_By = {
  employee_id?: Maybe<Order_By>;
};

/** Boolean expression to filter rows from the table "employee_territories". All fields are combined with a logical 'AND'. */
export type Employee_Territories_Bool_Exp = {
  _and?: Maybe<Array<Employee_Territories_Bool_Exp>>;
  _not?: Maybe<Employee_Territories_Bool_Exp>;
  _or?: Maybe<Array<Employee_Territories_Bool_Exp>>;
  employee?: Maybe<Employees_Bool_Exp>;
  employee_id?: Maybe<Smallint_Comparison_Exp>;
  territory?: Maybe<Territories_Bool_Exp>;
  territory_id?: Maybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "employee_territories" */
export enum Employee_Territories_Constraint {
  /** unique or primary key constraint */
  PkEmployeeTerritories = 'pk_employee_territories'
}

/** input type for incrementing numeric columns in table "employee_territories" */
export type Employee_Territories_Inc_Input = {
  employee_id?: Maybe<Scalars['smallint']>;
};

/** input type for inserting data into table "employee_territories" */
export type Employee_Territories_Insert_Input = {
  employee?: Maybe<Employees_Obj_Rel_Insert_Input>;
  employee_id?: Maybe<Scalars['smallint']>;
  territory?: Maybe<Territories_Obj_Rel_Insert_Input>;
  territory_id?: Maybe<Scalars['String']>;
};

/** aggregate max on columns */
export type Employee_Territories_Max_Fields = {
  __typename?: 'employee_territories_max_fields';
  employee_id?: Maybe<Scalars['smallint']>;
  territory_id?: Maybe<Scalars['String']>;
};

/** order by max() on columns of table "employee_territories" */
export type Employee_Territories_Max_Order_By = {
  employee_id?: Maybe<Order_By>;
  territory_id?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type Employee_Territories_Min_Fields = {
  __typename?: 'employee_territories_min_fields';
  employee_id?: Maybe<Scalars['smallint']>;
  territory_id?: Maybe<Scalars['String']>;
};

/** order by min() on columns of table "employee_territories" */
export type Employee_Territories_Min_Order_By = {
  employee_id?: Maybe<Order_By>;
  territory_id?: Maybe<Order_By>;
};

/** response of any mutation on the table "employee_territories" */
export type Employee_Territories_Mutation_Response = {
  __typename?: 'employee_territories_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Employee_Territories>;
};

/** on conflict condition type for table "employee_territories" */
export type Employee_Territories_On_Conflict = {
  constraint: Employee_Territories_Constraint;
  update_columns?: Array<Employee_Territories_Update_Column>;
  where?: Maybe<Employee_Territories_Bool_Exp>;
};

/** Ordering options when selecting data from "employee_territories". */
export type Employee_Territories_Order_By = {
  employee?: Maybe<Employees_Order_By>;
  employee_id?: Maybe<Order_By>;
  territory?: Maybe<Territories_Order_By>;
  territory_id?: Maybe<Order_By>;
};

/** primary key columns input for table: employee_territories */
export type Employee_Territories_Pk_Columns_Input = {
  employee_id: Scalars['smallint'];
  territory_id: Scalars['String'];
};

/** select columns of table "employee_territories" */
export enum Employee_Territories_Select_Column {
  /** column name */
  EmployeeId = 'employee_id',
  /** column name */
  TerritoryId = 'territory_id'
}

/** input type for updating data in table "employee_territories" */
export type Employee_Territories_Set_Input = {
  employee_id?: Maybe<Scalars['smallint']>;
  territory_id?: Maybe<Scalars['String']>;
};

/** aggregate stddev on columns */
export type Employee_Territories_Stddev_Fields = {
  __typename?: 'employee_territories_stddev_fields';
  employee_id?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "employee_territories" */
export type Employee_Territories_Stddev_Order_By = {
  employee_id?: Maybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Employee_Territories_Stddev_Pop_Fields = {
  __typename?: 'employee_territories_stddev_pop_fields';
  employee_id?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "employee_territories" */
export type Employee_Territories_Stddev_Pop_Order_By = {
  employee_id?: Maybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Employee_Territories_Stddev_Samp_Fields = {
  __typename?: 'employee_territories_stddev_samp_fields';
  employee_id?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "employee_territories" */
export type Employee_Territories_Stddev_Samp_Order_By = {
  employee_id?: Maybe<Order_By>;
};

/** aggregate sum on columns */
export type Employee_Territories_Sum_Fields = {
  __typename?: 'employee_territories_sum_fields';
  employee_id?: Maybe<Scalars['smallint']>;
};

/** order by sum() on columns of table "employee_territories" */
export type Employee_Territories_Sum_Order_By = {
  employee_id?: Maybe<Order_By>;
};

/** update columns of table "employee_territories" */
export enum Employee_Territories_Update_Column {
  /** column name */
  EmployeeId = 'employee_id',
  /** column name */
  TerritoryId = 'territory_id'
}

/** aggregate var_pop on columns */
export type Employee_Territories_Var_Pop_Fields = {
  __typename?: 'employee_territories_var_pop_fields';
  employee_id?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "employee_territories" */
export type Employee_Territories_Var_Pop_Order_By = {
  employee_id?: Maybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Employee_Territories_Var_Samp_Fields = {
  __typename?: 'employee_territories_var_samp_fields';
  employee_id?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "employee_territories" */
export type Employee_Territories_Var_Samp_Order_By = {
  employee_id?: Maybe<Order_By>;
};

/** aggregate variance on columns */
export type Employee_Territories_Variance_Fields = {
  __typename?: 'employee_territories_variance_fields';
  employee_id?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "employee_territories" */
export type Employee_Territories_Variance_Order_By = {
  employee_id?: Maybe<Order_By>;
};

/** columns and relationships of "employees" */
export type Employees = {
  __typename?: 'employees';
  address?: Maybe<Scalars['String']>;
  birth_date?: Maybe<Scalars['date']>;
  city?: Maybe<Scalars['String']>;
  country?: Maybe<Scalars['String']>;
  /** An object relationship */
  employee?: Maybe<Employees>;
  employee_id: Scalars['smallint'];
  /** An array relationship */
  employee_territories: Array<Employee_Territories>;
  /** An aggregate relationship */
  employee_territories_aggregate: Employee_Territories_Aggregate;
  /** An array relationship */
  employees: Array<Employees>;
  /** An aggregate relationship */
  employees_aggregate: Employees_Aggregate;
  extension?: Maybe<Scalars['String']>;
  first_name: Scalars['String'];
  hire_date?: Maybe<Scalars['date']>;
  home_phone?: Maybe<Scalars['String']>;
  last_name: Scalars['String'];
  notes?: Maybe<Scalars['String']>;
  /** fetch data from the table: "orders" */
  orders: Array<Orders>;
  /** An aggregate relationship */
  orders_aggregate: Orders_Aggregate;
  photo?: Maybe<Scalars['bytea']>;
  photo_path?: Maybe<Scalars['String']>;
  postal_code?: Maybe<Scalars['String']>;
  region?: Maybe<Scalars['String']>;
  reports_to?: Maybe<Scalars['smallint']>;
  title?: Maybe<Scalars['String']>;
  title_of_courtesy?: Maybe<Scalars['String']>;
};


/** columns and relationships of "employees" */
export type EmployeesEmployee_TerritoriesArgs = {
  distinct_on?: Maybe<Array<Employee_Territories_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Employee_Territories_Order_By>>;
  where?: Maybe<Employee_Territories_Bool_Exp>;
};


/** columns and relationships of "employees" */
export type EmployeesEmployee_Territories_AggregateArgs = {
  distinct_on?: Maybe<Array<Employee_Territories_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Employee_Territories_Order_By>>;
  where?: Maybe<Employee_Territories_Bool_Exp>;
};


/** columns and relationships of "employees" */
export type EmployeesEmployeesArgs = {
  distinct_on?: Maybe<Array<Employees_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Employees_Order_By>>;
  where?: Maybe<Employees_Bool_Exp>;
};


/** columns and relationships of "employees" */
export type EmployeesEmployees_AggregateArgs = {
  distinct_on?: Maybe<Array<Employees_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Employees_Order_By>>;
  where?: Maybe<Employees_Bool_Exp>;
};


/** columns and relationships of "employees" */
export type EmployeesOrdersArgs = {
  distinct_on?: Maybe<Array<Orders_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Orders_Order_By>>;
  where?: Maybe<Orders_Bool_Exp>;
};


/** columns and relationships of "employees" */
export type EmployeesOrders_AggregateArgs = {
  distinct_on?: Maybe<Array<Orders_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Orders_Order_By>>;
  where?: Maybe<Orders_Bool_Exp>;
};

/** aggregated selection of "employees" */
export type Employees_Aggregate = {
  __typename?: 'employees_aggregate';
  aggregate?: Maybe<Employees_Aggregate_Fields>;
  nodes: Array<Employees>;
};

/** aggregate fields of "employees" */
export type Employees_Aggregate_Fields = {
  __typename?: 'employees_aggregate_fields';
  avg?: Maybe<Employees_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Employees_Max_Fields>;
  min?: Maybe<Employees_Min_Fields>;
  stddev?: Maybe<Employees_Stddev_Fields>;
  stddev_pop?: Maybe<Employees_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Employees_Stddev_Samp_Fields>;
  sum?: Maybe<Employees_Sum_Fields>;
  var_pop?: Maybe<Employees_Var_Pop_Fields>;
  var_samp?: Maybe<Employees_Var_Samp_Fields>;
  variance?: Maybe<Employees_Variance_Fields>;
};


/** aggregate fields of "employees" */
export type Employees_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Employees_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "employees" */
export type Employees_Aggregate_Order_By = {
  avg?: Maybe<Employees_Avg_Order_By>;
  count?: Maybe<Order_By>;
  max?: Maybe<Employees_Max_Order_By>;
  min?: Maybe<Employees_Min_Order_By>;
  stddev?: Maybe<Employees_Stddev_Order_By>;
  stddev_pop?: Maybe<Employees_Stddev_Pop_Order_By>;
  stddev_samp?: Maybe<Employees_Stddev_Samp_Order_By>;
  sum?: Maybe<Employees_Sum_Order_By>;
  var_pop?: Maybe<Employees_Var_Pop_Order_By>;
  var_samp?: Maybe<Employees_Var_Samp_Order_By>;
  variance?: Maybe<Employees_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "employees" */
export type Employees_Arr_Rel_Insert_Input = {
  data: Array<Employees_Insert_Input>;
  /** on conflict condition */
  on_conflict?: Maybe<Employees_On_Conflict>;
};

/** aggregate avg on columns */
export type Employees_Avg_Fields = {
  __typename?: 'employees_avg_fields';
  employee_id?: Maybe<Scalars['Float']>;
  reports_to?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "employees" */
export type Employees_Avg_Order_By = {
  employee_id?: Maybe<Order_By>;
  reports_to?: Maybe<Order_By>;
};

/** Boolean expression to filter rows from the table "employees". All fields are combined with a logical 'AND'. */
export type Employees_Bool_Exp = {
  _and?: Maybe<Array<Employees_Bool_Exp>>;
  _not?: Maybe<Employees_Bool_Exp>;
  _or?: Maybe<Array<Employees_Bool_Exp>>;
  address?: Maybe<String_Comparison_Exp>;
  birth_date?: Maybe<Date_Comparison_Exp>;
  city?: Maybe<String_Comparison_Exp>;
  country?: Maybe<String_Comparison_Exp>;
  employee?: Maybe<Employees_Bool_Exp>;
  employee_id?: Maybe<Smallint_Comparison_Exp>;
  employee_territories?: Maybe<Employee_Territories_Bool_Exp>;
  employees?: Maybe<Employees_Bool_Exp>;
  extension?: Maybe<String_Comparison_Exp>;
  first_name?: Maybe<String_Comparison_Exp>;
  hire_date?: Maybe<Date_Comparison_Exp>;
  home_phone?: Maybe<String_Comparison_Exp>;
  last_name?: Maybe<String_Comparison_Exp>;
  notes?: Maybe<String_Comparison_Exp>;
  orders?: Maybe<Orders_Bool_Exp>;
  photo?: Maybe<Bytea_Comparison_Exp>;
  photo_path?: Maybe<String_Comparison_Exp>;
  postal_code?: Maybe<String_Comparison_Exp>;
  region?: Maybe<String_Comparison_Exp>;
  reports_to?: Maybe<Smallint_Comparison_Exp>;
  title?: Maybe<String_Comparison_Exp>;
  title_of_courtesy?: Maybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "employees" */
export enum Employees_Constraint {
  /** unique or primary key constraint */
  PkEmployees = 'pk_employees'
}

/** input type for incrementing numeric columns in table "employees" */
export type Employees_Inc_Input = {
  employee_id?: Maybe<Scalars['smallint']>;
  reports_to?: Maybe<Scalars['smallint']>;
};

/** input type for inserting data into table "employees" */
export type Employees_Insert_Input = {
  address?: Maybe<Scalars['String']>;
  birth_date?: Maybe<Scalars['date']>;
  city?: Maybe<Scalars['String']>;
  country?: Maybe<Scalars['String']>;
  employee?: Maybe<Employees_Obj_Rel_Insert_Input>;
  employee_id?: Maybe<Scalars['smallint']>;
  employee_territories?: Maybe<Employee_Territories_Arr_Rel_Insert_Input>;
  employees?: Maybe<Employees_Arr_Rel_Insert_Input>;
  extension?: Maybe<Scalars['String']>;
  first_name?: Maybe<Scalars['String']>;
  hire_date?: Maybe<Scalars['date']>;
  home_phone?: Maybe<Scalars['String']>;
  last_name?: Maybe<Scalars['String']>;
  notes?: Maybe<Scalars['String']>;
  orders?: Maybe<Orders_Arr_Rel_Insert_Input>;
  photo?: Maybe<Scalars['bytea']>;
  photo_path?: Maybe<Scalars['String']>;
  postal_code?: Maybe<Scalars['String']>;
  region?: Maybe<Scalars['String']>;
  reports_to?: Maybe<Scalars['smallint']>;
  title?: Maybe<Scalars['String']>;
  title_of_courtesy?: Maybe<Scalars['String']>;
};

/** aggregate max on columns */
export type Employees_Max_Fields = {
  __typename?: 'employees_max_fields';
  address?: Maybe<Scalars['String']>;
  birth_date?: Maybe<Scalars['date']>;
  city?: Maybe<Scalars['String']>;
  country?: Maybe<Scalars['String']>;
  employee_id?: Maybe<Scalars['smallint']>;
  extension?: Maybe<Scalars['String']>;
  first_name?: Maybe<Scalars['String']>;
  hire_date?: Maybe<Scalars['date']>;
  home_phone?: Maybe<Scalars['String']>;
  last_name?: Maybe<Scalars['String']>;
  notes?: Maybe<Scalars['String']>;
  photo_path?: Maybe<Scalars['String']>;
  postal_code?: Maybe<Scalars['String']>;
  region?: Maybe<Scalars['String']>;
  reports_to?: Maybe<Scalars['smallint']>;
  title?: Maybe<Scalars['String']>;
  title_of_courtesy?: Maybe<Scalars['String']>;
};

/** order by max() on columns of table "employees" */
export type Employees_Max_Order_By = {
  address?: Maybe<Order_By>;
  birth_date?: Maybe<Order_By>;
  city?: Maybe<Order_By>;
  country?: Maybe<Order_By>;
  employee_id?: Maybe<Order_By>;
  extension?: Maybe<Order_By>;
  first_name?: Maybe<Order_By>;
  hire_date?: Maybe<Order_By>;
  home_phone?: Maybe<Order_By>;
  last_name?: Maybe<Order_By>;
  notes?: Maybe<Order_By>;
  photo_path?: Maybe<Order_By>;
  postal_code?: Maybe<Order_By>;
  region?: Maybe<Order_By>;
  reports_to?: Maybe<Order_By>;
  title?: Maybe<Order_By>;
  title_of_courtesy?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type Employees_Min_Fields = {
  __typename?: 'employees_min_fields';
  address?: Maybe<Scalars['String']>;
  birth_date?: Maybe<Scalars['date']>;
  city?: Maybe<Scalars['String']>;
  country?: Maybe<Scalars['String']>;
  employee_id?: Maybe<Scalars['smallint']>;
  extension?: Maybe<Scalars['String']>;
  first_name?: Maybe<Scalars['String']>;
  hire_date?: Maybe<Scalars['date']>;
  home_phone?: Maybe<Scalars['String']>;
  last_name?: Maybe<Scalars['String']>;
  notes?: Maybe<Scalars['String']>;
  photo_path?: Maybe<Scalars['String']>;
  postal_code?: Maybe<Scalars['String']>;
  region?: Maybe<Scalars['String']>;
  reports_to?: Maybe<Scalars['smallint']>;
  title?: Maybe<Scalars['String']>;
  title_of_courtesy?: Maybe<Scalars['String']>;
};

/** order by min() on columns of table "employees" */
export type Employees_Min_Order_By = {
  address?: Maybe<Order_By>;
  birth_date?: Maybe<Order_By>;
  city?: Maybe<Order_By>;
  country?: Maybe<Order_By>;
  employee_id?: Maybe<Order_By>;
  extension?: Maybe<Order_By>;
  first_name?: Maybe<Order_By>;
  hire_date?: Maybe<Order_By>;
  home_phone?: Maybe<Order_By>;
  last_name?: Maybe<Order_By>;
  notes?: Maybe<Order_By>;
  photo_path?: Maybe<Order_By>;
  postal_code?: Maybe<Order_By>;
  region?: Maybe<Order_By>;
  reports_to?: Maybe<Order_By>;
  title?: Maybe<Order_By>;
  title_of_courtesy?: Maybe<Order_By>;
};

/** response of any mutation on the table "employees" */
export type Employees_Mutation_Response = {
  __typename?: 'employees_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Employees>;
};

/** input type for inserting object relation for remote table "employees" */
export type Employees_Obj_Rel_Insert_Input = {
  data: Employees_Insert_Input;
  /** on conflict condition */
  on_conflict?: Maybe<Employees_On_Conflict>;
};

/** on conflict condition type for table "employees" */
export type Employees_On_Conflict = {
  constraint: Employees_Constraint;
  update_columns?: Array<Employees_Update_Column>;
  where?: Maybe<Employees_Bool_Exp>;
};

/** Ordering options when selecting data from "employees". */
export type Employees_Order_By = {
  address?: Maybe<Order_By>;
  birth_date?: Maybe<Order_By>;
  city?: Maybe<Order_By>;
  country?: Maybe<Order_By>;
  employee?: Maybe<Employees_Order_By>;
  employee_id?: Maybe<Order_By>;
  employee_territories_aggregate?: Maybe<Employee_Territories_Aggregate_Order_By>;
  employees_aggregate?: Maybe<Employees_Aggregate_Order_By>;
  extension?: Maybe<Order_By>;
  first_name?: Maybe<Order_By>;
  hire_date?: Maybe<Order_By>;
  home_phone?: Maybe<Order_By>;
  last_name?: Maybe<Order_By>;
  notes?: Maybe<Order_By>;
  orders_aggregate?: Maybe<Orders_Aggregate_Order_By>;
  photo?: Maybe<Order_By>;
  photo_path?: Maybe<Order_By>;
  postal_code?: Maybe<Order_By>;
  region?: Maybe<Order_By>;
  reports_to?: Maybe<Order_By>;
  title?: Maybe<Order_By>;
  title_of_courtesy?: Maybe<Order_By>;
};

/** primary key columns input for table: employees */
export type Employees_Pk_Columns_Input = {
  employee_id: Scalars['smallint'];
};

/** select columns of table "employees" */
export enum Employees_Select_Column {
  /** column name */
  Address = 'address',
  /** column name */
  BirthDate = 'birth_date',
  /** column name */
  City = 'city',
  /** column name */
  Country = 'country',
  /** column name */
  EmployeeId = 'employee_id',
  /** column name */
  Extension = 'extension',
  /** column name */
  FirstName = 'first_name',
  /** column name */
  HireDate = 'hire_date',
  /** column name */
  HomePhone = 'home_phone',
  /** column name */
  LastName = 'last_name',
  /** column name */
  Notes = 'notes',
  /** column name */
  Photo = 'photo',
  /** column name */
  PhotoPath = 'photo_path',
  /** column name */
  PostalCode = 'postal_code',
  /** column name */
  Region = 'region',
  /** column name */
  ReportsTo = 'reports_to',
  /** column name */
  Title = 'title',
  /** column name */
  TitleOfCourtesy = 'title_of_courtesy'
}

/** input type for updating data in table "employees" */
export type Employees_Set_Input = {
  address?: Maybe<Scalars['String']>;
  birth_date?: Maybe<Scalars['date']>;
  city?: Maybe<Scalars['String']>;
  country?: Maybe<Scalars['String']>;
  employee_id?: Maybe<Scalars['smallint']>;
  extension?: Maybe<Scalars['String']>;
  first_name?: Maybe<Scalars['String']>;
  hire_date?: Maybe<Scalars['date']>;
  home_phone?: Maybe<Scalars['String']>;
  last_name?: Maybe<Scalars['String']>;
  notes?: Maybe<Scalars['String']>;
  photo?: Maybe<Scalars['bytea']>;
  photo_path?: Maybe<Scalars['String']>;
  postal_code?: Maybe<Scalars['String']>;
  region?: Maybe<Scalars['String']>;
  reports_to?: Maybe<Scalars['smallint']>;
  title?: Maybe<Scalars['String']>;
  title_of_courtesy?: Maybe<Scalars['String']>;
};

/** aggregate stddev on columns */
export type Employees_Stddev_Fields = {
  __typename?: 'employees_stddev_fields';
  employee_id?: Maybe<Scalars['Float']>;
  reports_to?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "employees" */
export type Employees_Stddev_Order_By = {
  employee_id?: Maybe<Order_By>;
  reports_to?: Maybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Employees_Stddev_Pop_Fields = {
  __typename?: 'employees_stddev_pop_fields';
  employee_id?: Maybe<Scalars['Float']>;
  reports_to?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "employees" */
export type Employees_Stddev_Pop_Order_By = {
  employee_id?: Maybe<Order_By>;
  reports_to?: Maybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Employees_Stddev_Samp_Fields = {
  __typename?: 'employees_stddev_samp_fields';
  employee_id?: Maybe<Scalars['Float']>;
  reports_to?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "employees" */
export type Employees_Stddev_Samp_Order_By = {
  employee_id?: Maybe<Order_By>;
  reports_to?: Maybe<Order_By>;
};

/** aggregate sum on columns */
export type Employees_Sum_Fields = {
  __typename?: 'employees_sum_fields';
  employee_id?: Maybe<Scalars['smallint']>;
  reports_to?: Maybe<Scalars['smallint']>;
};

/** order by sum() on columns of table "employees" */
export type Employees_Sum_Order_By = {
  employee_id?: Maybe<Order_By>;
  reports_to?: Maybe<Order_By>;
};

/** update columns of table "employees" */
export enum Employees_Update_Column {
  /** column name */
  Address = 'address',
  /** column name */
  BirthDate = 'birth_date',
  /** column name */
  City = 'city',
  /** column name */
  Country = 'country',
  /** column name */
  EmployeeId = 'employee_id',
  /** column name */
  Extension = 'extension',
  /** column name */
  FirstName = 'first_name',
  /** column name */
  HireDate = 'hire_date',
  /** column name */
  HomePhone = 'home_phone',
  /** column name */
  LastName = 'last_name',
  /** column name */
  Notes = 'notes',
  /** column name */
  Photo = 'photo',
  /** column name */
  PhotoPath = 'photo_path',
  /** column name */
  PostalCode = 'postal_code',
  /** column name */
  Region = 'region',
  /** column name */
  ReportsTo = 'reports_to',
  /** column name */
  Title = 'title',
  /** column name */
  TitleOfCourtesy = 'title_of_courtesy'
}

/** aggregate var_pop on columns */
export type Employees_Var_Pop_Fields = {
  __typename?: 'employees_var_pop_fields';
  employee_id?: Maybe<Scalars['Float']>;
  reports_to?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "employees" */
export type Employees_Var_Pop_Order_By = {
  employee_id?: Maybe<Order_By>;
  reports_to?: Maybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Employees_Var_Samp_Fields = {
  __typename?: 'employees_var_samp_fields';
  employee_id?: Maybe<Scalars['Float']>;
  reports_to?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "employees" */
export type Employees_Var_Samp_Order_By = {
  employee_id?: Maybe<Order_By>;
  reports_to?: Maybe<Order_By>;
};

/** aggregate variance on columns */
export type Employees_Variance_Fields = {
  __typename?: 'employees_variance_fields';
  employee_id?: Maybe<Scalars['Float']>;
  reports_to?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "employees" */
export type Employees_Variance_Order_By = {
  employee_id?: Maybe<Order_By>;
  reports_to?: Maybe<Order_By>;
};

/** columns and relationships of "images" */
export type Images = {
  __typename?: 'images';
  created_at: Scalars['timestamptz'];
  id: Scalars['uuid'];
  image_url: Scalars['String'];
  updated_at: Scalars['timestamptz'];
  /** An array relationship */
  work_orders: Array<Work_Order>;
  /** An aggregate relationship */
  work_orders_aggregate: Work_Order_Aggregate;
};


/** columns and relationships of "images" */
export type ImagesWork_OrdersArgs = {
  distinct_on?: Maybe<Array<Work_Order_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Work_Order_Order_By>>;
  where?: Maybe<Work_Order_Bool_Exp>;
};


/** columns and relationships of "images" */
export type ImagesWork_Orders_AggregateArgs = {
  distinct_on?: Maybe<Array<Work_Order_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Work_Order_Order_By>>;
  where?: Maybe<Work_Order_Bool_Exp>;
};

/** aggregated selection of "images" */
export type Images_Aggregate = {
  __typename?: 'images_aggregate';
  aggregate?: Maybe<Images_Aggregate_Fields>;
  nodes: Array<Images>;
};

/** aggregate fields of "images" */
export type Images_Aggregate_Fields = {
  __typename?: 'images_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<Images_Max_Fields>;
  min?: Maybe<Images_Min_Fields>;
};


/** aggregate fields of "images" */
export type Images_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Images_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** Boolean expression to filter rows from the table "images". All fields are combined with a logical 'AND'. */
export type Images_Bool_Exp = {
  _and?: Maybe<Array<Images_Bool_Exp>>;
  _not?: Maybe<Images_Bool_Exp>;
  _or?: Maybe<Array<Images_Bool_Exp>>;
  created_at?: Maybe<Timestamptz_Comparison_Exp>;
  id?: Maybe<Uuid_Comparison_Exp>;
  image_url?: Maybe<String_Comparison_Exp>;
  updated_at?: Maybe<Timestamptz_Comparison_Exp>;
  work_orders?: Maybe<Work_Order_Bool_Exp>;
};

/** unique or primary key constraints on table "images" */
export enum Images_Constraint {
  /** unique or primary key constraint */
  ImagesPkey = 'images_pkey'
}

/** input type for inserting data into table "images" */
export type Images_Insert_Input = {
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['uuid']>;
  image_url?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
  work_orders?: Maybe<Work_Order_Arr_Rel_Insert_Input>;
};

/** aggregate max on columns */
export type Images_Max_Fields = {
  __typename?: 'images_max_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['uuid']>;
  image_url?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** aggregate min on columns */
export type Images_Min_Fields = {
  __typename?: 'images_min_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['uuid']>;
  image_url?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** response of any mutation on the table "images" */
export type Images_Mutation_Response = {
  __typename?: 'images_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Images>;
};

/** input type for inserting object relation for remote table "images" */
export type Images_Obj_Rel_Insert_Input = {
  data: Images_Insert_Input;
  /** on conflict condition */
  on_conflict?: Maybe<Images_On_Conflict>;
};

/** on conflict condition type for table "images" */
export type Images_On_Conflict = {
  constraint: Images_Constraint;
  update_columns?: Array<Images_Update_Column>;
  where?: Maybe<Images_Bool_Exp>;
};

/** Ordering options when selecting data from "images". */
export type Images_Order_By = {
  created_at?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  image_url?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
  work_orders_aggregate?: Maybe<Work_Order_Aggregate_Order_By>;
};

/** primary key columns input for table: images */
export type Images_Pk_Columns_Input = {
  id: Scalars['uuid'];
};

/** select columns of table "images" */
export enum Images_Select_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  ImageUrl = 'image_url',
  /** column name */
  UpdatedAt = 'updated_at'
}

/** input type for updating data in table "images" */
export type Images_Set_Input = {
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['uuid']>;
  image_url?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** update columns of table "images" */
export enum Images_Update_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  ImageUrl = 'image_url',
  /** column name */
  UpdatedAt = 'updated_at'
}

/** columns and relationships of "master.canned_response" */
export type Master_Canned_Response = {
  __typename?: 'master_canned_response';
  created_at: Scalars['timestamptz'];
  id: Scalars['uuid'];
  name: Scalars['String'];
  updated_at: Scalars['timestamptz'];
};

/** aggregated selection of "master.canned_response" */
export type Master_Canned_Response_Aggregate = {
  __typename?: 'master_canned_response_aggregate';
  aggregate?: Maybe<Master_Canned_Response_Aggregate_Fields>;
  nodes: Array<Master_Canned_Response>;
};

/** aggregate fields of "master.canned_response" */
export type Master_Canned_Response_Aggregate_Fields = {
  __typename?: 'master_canned_response_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<Master_Canned_Response_Max_Fields>;
  min?: Maybe<Master_Canned_Response_Min_Fields>;
};


/** aggregate fields of "master.canned_response" */
export type Master_Canned_Response_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Master_Canned_Response_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** Boolean expression to filter rows from the table "master.canned_response". All fields are combined with a logical 'AND'. */
export type Master_Canned_Response_Bool_Exp = {
  _and?: Maybe<Array<Master_Canned_Response_Bool_Exp>>;
  _not?: Maybe<Master_Canned_Response_Bool_Exp>;
  _or?: Maybe<Array<Master_Canned_Response_Bool_Exp>>;
  created_at?: Maybe<Timestamptz_Comparison_Exp>;
  id?: Maybe<Uuid_Comparison_Exp>;
  name?: Maybe<String_Comparison_Exp>;
  updated_at?: Maybe<Timestamptz_Comparison_Exp>;
};

/** unique or primary key constraints on table "master.canned_response" */
export enum Master_Canned_Response_Constraint {
  /** unique or primary key constraint */
  CannedResponseNameKey = 'canned_response_name_key',
  /** unique or primary key constraint */
  CannedResponsePkey = 'canned_response_pkey'
}

/** input type for inserting data into table "master.canned_response" */
export type Master_Canned_Response_Insert_Input = {
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['uuid']>;
  name?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** aggregate max on columns */
export type Master_Canned_Response_Max_Fields = {
  __typename?: 'master_canned_response_max_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['uuid']>;
  name?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** aggregate min on columns */
export type Master_Canned_Response_Min_Fields = {
  __typename?: 'master_canned_response_min_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['uuid']>;
  name?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** response of any mutation on the table "master.canned_response" */
export type Master_Canned_Response_Mutation_Response = {
  __typename?: 'master_canned_response_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Master_Canned_Response>;
};

/** on conflict condition type for table "master.canned_response" */
export type Master_Canned_Response_On_Conflict = {
  constraint: Master_Canned_Response_Constraint;
  update_columns?: Array<Master_Canned_Response_Update_Column>;
  where?: Maybe<Master_Canned_Response_Bool_Exp>;
};

/** Ordering options when selecting data from "master.canned_response". */
export type Master_Canned_Response_Order_By = {
  created_at?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  name?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
};

/** primary key columns input for table: master_canned_response */
export type Master_Canned_Response_Pk_Columns_Input = {
  id: Scalars['uuid'];
};

/** select columns of table "master.canned_response" */
export enum Master_Canned_Response_Select_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name',
  /** column name */
  UpdatedAt = 'updated_at'
}

/** input type for updating data in table "master.canned_response" */
export type Master_Canned_Response_Set_Input = {
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['uuid']>;
  name?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** update columns of table "master.canned_response" */
export enum Master_Canned_Response_Update_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name',
  /** column name */
  UpdatedAt = 'updated_at'
}

/** columns and relationships of "master.city" */
export type Master_City = {
  __typename?: 'master_city';
  created_at: Scalars['timestamptz'];
  id: Scalars['uuid'];
  image_url: Scalars['String'];
  name: Scalars['String'];
  /** An object relationship */
  state?: Maybe<Master_State>;
  state_id?: Maybe<Scalars['uuid']>;
  updated_at: Scalars['timestamptz'];
};

/** aggregated selection of "master.city" */
export type Master_City_Aggregate = {
  __typename?: 'master_city_aggregate';
  aggregate?: Maybe<Master_City_Aggregate_Fields>;
  nodes: Array<Master_City>;
};

/** aggregate fields of "master.city" */
export type Master_City_Aggregate_Fields = {
  __typename?: 'master_city_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<Master_City_Max_Fields>;
  min?: Maybe<Master_City_Min_Fields>;
};


/** aggregate fields of "master.city" */
export type Master_City_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Master_City_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "master.city" */
export type Master_City_Aggregate_Order_By = {
  count?: Maybe<Order_By>;
  max?: Maybe<Master_City_Max_Order_By>;
  min?: Maybe<Master_City_Min_Order_By>;
};

/** input type for inserting array relation for remote table "master.city" */
export type Master_City_Arr_Rel_Insert_Input = {
  data: Array<Master_City_Insert_Input>;
  /** on conflict condition */
  on_conflict?: Maybe<Master_City_On_Conflict>;
};

/** Boolean expression to filter rows from the table "master.city". All fields are combined with a logical 'AND'. */
export type Master_City_Bool_Exp = {
  _and?: Maybe<Array<Master_City_Bool_Exp>>;
  _not?: Maybe<Master_City_Bool_Exp>;
  _or?: Maybe<Array<Master_City_Bool_Exp>>;
  created_at?: Maybe<Timestamptz_Comparison_Exp>;
  id?: Maybe<Uuid_Comparison_Exp>;
  image_url?: Maybe<String_Comparison_Exp>;
  name?: Maybe<String_Comparison_Exp>;
  state?: Maybe<Master_State_Bool_Exp>;
  state_id?: Maybe<Uuid_Comparison_Exp>;
  updated_at?: Maybe<Timestamptz_Comparison_Exp>;
};

/** unique or primary key constraints on table "master.city" */
export enum Master_City_Constraint {
  /** unique or primary key constraint */
  CityPkey = 'city_pkey'
}

/** input type for inserting data into table "master.city" */
export type Master_City_Insert_Input = {
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['uuid']>;
  image_url?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  state?: Maybe<Master_State_Obj_Rel_Insert_Input>;
  state_id?: Maybe<Scalars['uuid']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** aggregate max on columns */
export type Master_City_Max_Fields = {
  __typename?: 'master_city_max_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['uuid']>;
  image_url?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  state_id?: Maybe<Scalars['uuid']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** order by max() on columns of table "master.city" */
export type Master_City_Max_Order_By = {
  created_at?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  image_url?: Maybe<Order_By>;
  name?: Maybe<Order_By>;
  state_id?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type Master_City_Min_Fields = {
  __typename?: 'master_city_min_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['uuid']>;
  image_url?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  state_id?: Maybe<Scalars['uuid']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** order by min() on columns of table "master.city" */
export type Master_City_Min_Order_By = {
  created_at?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  image_url?: Maybe<Order_By>;
  name?: Maybe<Order_By>;
  state_id?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
};

/** response of any mutation on the table "master.city" */
export type Master_City_Mutation_Response = {
  __typename?: 'master_city_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Master_City>;
};

/** on conflict condition type for table "master.city" */
export type Master_City_On_Conflict = {
  constraint: Master_City_Constraint;
  update_columns?: Array<Master_City_Update_Column>;
  where?: Maybe<Master_City_Bool_Exp>;
};

/** Ordering options when selecting data from "master.city". */
export type Master_City_Order_By = {
  created_at?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  image_url?: Maybe<Order_By>;
  name?: Maybe<Order_By>;
  state?: Maybe<Master_State_Order_By>;
  state_id?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
};

/** primary key columns input for table: master_city */
export type Master_City_Pk_Columns_Input = {
  id: Scalars['uuid'];
};

/** select columns of table "master.city" */
export enum Master_City_Select_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  ImageUrl = 'image_url',
  /** column name */
  Name = 'name',
  /** column name */
  StateId = 'state_id',
  /** column name */
  UpdatedAt = 'updated_at'
}

/** input type for updating data in table "master.city" */
export type Master_City_Set_Input = {
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['uuid']>;
  image_url?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  state_id?: Maybe<Scalars['uuid']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** update columns of table "master.city" */
export enum Master_City_Update_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  ImageUrl = 'image_url',
  /** column name */
  Name = 'name',
  /** column name */
  StateId = 'state_id',
  /** column name */
  UpdatedAt = 'updated_at'
}

/** columns and relationships of "master.country" */
export type Master_Country = {
  __typename?: 'master_country';
  created_at: Scalars['timestamptz'];
  id: Scalars['uuid'];
  image_url: Scalars['String'];
  name: Scalars['String'];
  state_id?: Maybe<Scalars['uuid']>;
  /** An array relationship */
  states: Array<Master_State>;
  /** An aggregate relationship */
  states_aggregate: Master_State_Aggregate;
  updated_at: Scalars['timestamptz'];
};


/** columns and relationships of "master.country" */
export type Master_CountryStatesArgs = {
  distinct_on?: Maybe<Array<Master_State_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Master_State_Order_By>>;
  where?: Maybe<Master_State_Bool_Exp>;
};


/** columns and relationships of "master.country" */
export type Master_CountryStates_AggregateArgs = {
  distinct_on?: Maybe<Array<Master_State_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Master_State_Order_By>>;
  where?: Maybe<Master_State_Bool_Exp>;
};

/** aggregated selection of "master.country" */
export type Master_Country_Aggregate = {
  __typename?: 'master_country_aggregate';
  aggregate?: Maybe<Master_Country_Aggregate_Fields>;
  nodes: Array<Master_Country>;
};

/** aggregate fields of "master.country" */
export type Master_Country_Aggregate_Fields = {
  __typename?: 'master_country_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<Master_Country_Max_Fields>;
  min?: Maybe<Master_Country_Min_Fields>;
};


/** aggregate fields of "master.country" */
export type Master_Country_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Master_Country_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** Boolean expression to filter rows from the table "master.country". All fields are combined with a logical 'AND'. */
export type Master_Country_Bool_Exp = {
  _and?: Maybe<Array<Master_Country_Bool_Exp>>;
  _not?: Maybe<Master_Country_Bool_Exp>;
  _or?: Maybe<Array<Master_Country_Bool_Exp>>;
  created_at?: Maybe<Timestamptz_Comparison_Exp>;
  id?: Maybe<Uuid_Comparison_Exp>;
  image_url?: Maybe<String_Comparison_Exp>;
  name?: Maybe<String_Comparison_Exp>;
  state_id?: Maybe<Uuid_Comparison_Exp>;
  states?: Maybe<Master_State_Bool_Exp>;
  updated_at?: Maybe<Timestamptz_Comparison_Exp>;
};

/** unique or primary key constraints on table "master.country" */
export enum Master_Country_Constraint {
  /** unique or primary key constraint */
  CountryPkey = 'country_pkey'
}

/** input type for inserting data into table "master.country" */
export type Master_Country_Insert_Input = {
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['uuid']>;
  image_url?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  state_id?: Maybe<Scalars['uuid']>;
  states?: Maybe<Master_State_Arr_Rel_Insert_Input>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** aggregate max on columns */
export type Master_Country_Max_Fields = {
  __typename?: 'master_country_max_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['uuid']>;
  image_url?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  state_id?: Maybe<Scalars['uuid']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** aggregate min on columns */
export type Master_Country_Min_Fields = {
  __typename?: 'master_country_min_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['uuid']>;
  image_url?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  state_id?: Maybe<Scalars['uuid']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** response of any mutation on the table "master.country" */
export type Master_Country_Mutation_Response = {
  __typename?: 'master_country_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Master_Country>;
};

/** input type for inserting object relation for remote table "master.country" */
export type Master_Country_Obj_Rel_Insert_Input = {
  data: Master_Country_Insert_Input;
  /** on conflict condition */
  on_conflict?: Maybe<Master_Country_On_Conflict>;
};

/** on conflict condition type for table "master.country" */
export type Master_Country_On_Conflict = {
  constraint: Master_Country_Constraint;
  update_columns?: Array<Master_Country_Update_Column>;
  where?: Maybe<Master_Country_Bool_Exp>;
};

/** Ordering options when selecting data from "master.country". */
export type Master_Country_Order_By = {
  created_at?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  image_url?: Maybe<Order_By>;
  name?: Maybe<Order_By>;
  state_id?: Maybe<Order_By>;
  states_aggregate?: Maybe<Master_State_Aggregate_Order_By>;
  updated_at?: Maybe<Order_By>;
};

/** primary key columns input for table: master_country */
export type Master_Country_Pk_Columns_Input = {
  id: Scalars['uuid'];
};

/** select columns of table "master.country" */
export enum Master_Country_Select_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  ImageUrl = 'image_url',
  /** column name */
  Name = 'name',
  /** column name */
  StateId = 'state_id',
  /** column name */
  UpdatedAt = 'updated_at'
}

/** input type for updating data in table "master.country" */
export type Master_Country_Set_Input = {
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['uuid']>;
  image_url?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  state_id?: Maybe<Scalars['uuid']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** update columns of table "master.country" */
export enum Master_Country_Update_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  ImageUrl = 'image_url',
  /** column name */
  Name = 'name',
  /** column name */
  StateId = 'state_id',
  /** column name */
  UpdatedAt = 'updated_at'
}

/** columns and relationships of "master.customers" */
export type Master_Customers = {
  __typename?: 'master_customers';
  created_at: Scalars['timestamptz'];
  id: Scalars['uuid'];
  name: Scalars['String'];
  updated_at: Scalars['timestamptz'];
};

/** aggregated selection of "master.customers" */
export type Master_Customers_Aggregate = {
  __typename?: 'master_customers_aggregate';
  aggregate?: Maybe<Master_Customers_Aggregate_Fields>;
  nodes: Array<Master_Customers>;
};

/** aggregate fields of "master.customers" */
export type Master_Customers_Aggregate_Fields = {
  __typename?: 'master_customers_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<Master_Customers_Max_Fields>;
  min?: Maybe<Master_Customers_Min_Fields>;
};


/** aggregate fields of "master.customers" */
export type Master_Customers_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Master_Customers_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** Boolean expression to filter rows from the table "master.customers". All fields are combined with a logical 'AND'. */
export type Master_Customers_Bool_Exp = {
  _and?: Maybe<Array<Master_Customers_Bool_Exp>>;
  _not?: Maybe<Master_Customers_Bool_Exp>;
  _or?: Maybe<Array<Master_Customers_Bool_Exp>>;
  created_at?: Maybe<Timestamptz_Comparison_Exp>;
  id?: Maybe<Uuid_Comparison_Exp>;
  name?: Maybe<String_Comparison_Exp>;
  updated_at?: Maybe<Timestamptz_Comparison_Exp>;
};

/** unique or primary key constraints on table "master.customers" */
export enum Master_Customers_Constraint {
  /** unique or primary key constraint */
  CustomersPkey = 'customers_pkey'
}

/** input type for inserting data into table "master.customers" */
export type Master_Customers_Insert_Input = {
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['uuid']>;
  name?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** aggregate max on columns */
export type Master_Customers_Max_Fields = {
  __typename?: 'master_customers_max_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['uuid']>;
  name?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** aggregate min on columns */
export type Master_Customers_Min_Fields = {
  __typename?: 'master_customers_min_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['uuid']>;
  name?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** response of any mutation on the table "master.customers" */
export type Master_Customers_Mutation_Response = {
  __typename?: 'master_customers_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Master_Customers>;
};

/** on conflict condition type for table "master.customers" */
export type Master_Customers_On_Conflict = {
  constraint: Master_Customers_Constraint;
  update_columns?: Array<Master_Customers_Update_Column>;
  where?: Maybe<Master_Customers_Bool_Exp>;
};

/** Ordering options when selecting data from "master.customers". */
export type Master_Customers_Order_By = {
  created_at?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  name?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
};

/** primary key columns input for table: master_customers */
export type Master_Customers_Pk_Columns_Input = {
  id: Scalars['uuid'];
};

/** select columns of table "master.customers" */
export enum Master_Customers_Select_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name',
  /** column name */
  UpdatedAt = 'updated_at'
}

/** input type for updating data in table "master.customers" */
export type Master_Customers_Set_Input = {
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['uuid']>;
  name?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** update columns of table "master.customers" */
export enum Master_Customers_Update_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name',
  /** column name */
  UpdatedAt = 'updated_at'
}

/** columns and relationships of "master.state" */
export type Master_State = {
  __typename?: 'master_state';
  /** An array relationship */
  cities: Array<Master_City>;
  /** An aggregate relationship */
  cities_aggregate: Master_City_Aggregate;
  /** An object relationship */
  country?: Maybe<Master_Country>;
  country_id?: Maybe<Scalars['uuid']>;
  created_at: Scalars['timestamptz'];
  id: Scalars['uuid'];
  image_url: Scalars['String'];
  name: Scalars['String'];
  updated_at: Scalars['timestamptz'];
};


/** columns and relationships of "master.state" */
export type Master_StateCitiesArgs = {
  distinct_on?: Maybe<Array<Master_City_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Master_City_Order_By>>;
  where?: Maybe<Master_City_Bool_Exp>;
};


/** columns and relationships of "master.state" */
export type Master_StateCities_AggregateArgs = {
  distinct_on?: Maybe<Array<Master_City_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Master_City_Order_By>>;
  where?: Maybe<Master_City_Bool_Exp>;
};

/** aggregated selection of "master.state" */
export type Master_State_Aggregate = {
  __typename?: 'master_state_aggregate';
  aggregate?: Maybe<Master_State_Aggregate_Fields>;
  nodes: Array<Master_State>;
};

/** aggregate fields of "master.state" */
export type Master_State_Aggregate_Fields = {
  __typename?: 'master_state_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<Master_State_Max_Fields>;
  min?: Maybe<Master_State_Min_Fields>;
};


/** aggregate fields of "master.state" */
export type Master_State_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Master_State_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "master.state" */
export type Master_State_Aggregate_Order_By = {
  count?: Maybe<Order_By>;
  max?: Maybe<Master_State_Max_Order_By>;
  min?: Maybe<Master_State_Min_Order_By>;
};

/** input type for inserting array relation for remote table "master.state" */
export type Master_State_Arr_Rel_Insert_Input = {
  data: Array<Master_State_Insert_Input>;
  /** on conflict condition */
  on_conflict?: Maybe<Master_State_On_Conflict>;
};

/** Boolean expression to filter rows from the table "master.state". All fields are combined with a logical 'AND'. */
export type Master_State_Bool_Exp = {
  _and?: Maybe<Array<Master_State_Bool_Exp>>;
  _not?: Maybe<Master_State_Bool_Exp>;
  _or?: Maybe<Array<Master_State_Bool_Exp>>;
  cities?: Maybe<Master_City_Bool_Exp>;
  country?: Maybe<Master_Country_Bool_Exp>;
  country_id?: Maybe<Uuid_Comparison_Exp>;
  created_at?: Maybe<Timestamptz_Comparison_Exp>;
  id?: Maybe<Uuid_Comparison_Exp>;
  image_url?: Maybe<String_Comparison_Exp>;
  name?: Maybe<String_Comparison_Exp>;
  updated_at?: Maybe<Timestamptz_Comparison_Exp>;
};

/** unique or primary key constraints on table "master.state" */
export enum Master_State_Constraint {
  /** unique or primary key constraint */
  StatePkey = 'state_pkey'
}

/** input type for inserting data into table "master.state" */
export type Master_State_Insert_Input = {
  cities?: Maybe<Master_City_Arr_Rel_Insert_Input>;
  country?: Maybe<Master_Country_Obj_Rel_Insert_Input>;
  country_id?: Maybe<Scalars['uuid']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['uuid']>;
  image_url?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** aggregate max on columns */
export type Master_State_Max_Fields = {
  __typename?: 'master_state_max_fields';
  country_id?: Maybe<Scalars['uuid']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['uuid']>;
  image_url?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** order by max() on columns of table "master.state" */
export type Master_State_Max_Order_By = {
  country_id?: Maybe<Order_By>;
  created_at?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  image_url?: Maybe<Order_By>;
  name?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type Master_State_Min_Fields = {
  __typename?: 'master_state_min_fields';
  country_id?: Maybe<Scalars['uuid']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['uuid']>;
  image_url?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** order by min() on columns of table "master.state" */
export type Master_State_Min_Order_By = {
  country_id?: Maybe<Order_By>;
  created_at?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  image_url?: Maybe<Order_By>;
  name?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
};

/** response of any mutation on the table "master.state" */
export type Master_State_Mutation_Response = {
  __typename?: 'master_state_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Master_State>;
};

/** input type for inserting object relation for remote table "master.state" */
export type Master_State_Obj_Rel_Insert_Input = {
  data: Master_State_Insert_Input;
  /** on conflict condition */
  on_conflict?: Maybe<Master_State_On_Conflict>;
};

/** on conflict condition type for table "master.state" */
export type Master_State_On_Conflict = {
  constraint: Master_State_Constraint;
  update_columns?: Array<Master_State_Update_Column>;
  where?: Maybe<Master_State_Bool_Exp>;
};

/** Ordering options when selecting data from "master.state". */
export type Master_State_Order_By = {
  cities_aggregate?: Maybe<Master_City_Aggregate_Order_By>;
  country?: Maybe<Master_Country_Order_By>;
  country_id?: Maybe<Order_By>;
  created_at?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  image_url?: Maybe<Order_By>;
  name?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
};

/** primary key columns input for table: master_state */
export type Master_State_Pk_Columns_Input = {
  id: Scalars['uuid'];
};

/** select columns of table "master.state" */
export enum Master_State_Select_Column {
  /** column name */
  CountryId = 'country_id',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  ImageUrl = 'image_url',
  /** column name */
  Name = 'name',
  /** column name */
  UpdatedAt = 'updated_at'
}

/** input type for updating data in table "master.state" */
export type Master_State_Set_Input = {
  country_id?: Maybe<Scalars['uuid']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['uuid']>;
  image_url?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** update columns of table "master.state" */
export enum Master_State_Update_Column {
  /** column name */
  CountryId = 'country_id',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  ImageUrl = 'image_url',
  /** column name */
  Name = 'name',
  /** column name */
  UpdatedAt = 'updated_at'
}

/** columns and relationships of "master.status" */
export type Master_Status = {
  __typename?: 'master_status';
  created_at: Scalars['timestamptz'];
  id: Scalars['uuid'];
  name: Scalars['String'];
  updated_at: Scalars['timestamptz'];
};

/** aggregated selection of "master.status" */
export type Master_Status_Aggregate = {
  __typename?: 'master_status_aggregate';
  aggregate?: Maybe<Master_Status_Aggregate_Fields>;
  nodes: Array<Master_Status>;
};

/** aggregate fields of "master.status" */
export type Master_Status_Aggregate_Fields = {
  __typename?: 'master_status_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<Master_Status_Max_Fields>;
  min?: Maybe<Master_Status_Min_Fields>;
};


/** aggregate fields of "master.status" */
export type Master_Status_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Master_Status_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** Boolean expression to filter rows from the table "master.status". All fields are combined with a logical 'AND'. */
export type Master_Status_Bool_Exp = {
  _and?: Maybe<Array<Master_Status_Bool_Exp>>;
  _not?: Maybe<Master_Status_Bool_Exp>;
  _or?: Maybe<Array<Master_Status_Bool_Exp>>;
  created_at?: Maybe<Timestamptz_Comparison_Exp>;
  id?: Maybe<Uuid_Comparison_Exp>;
  name?: Maybe<String_Comparison_Exp>;
  updated_at?: Maybe<Timestamptz_Comparison_Exp>;
};

/** unique or primary key constraints on table "master.status" */
export enum Master_Status_Constraint {
  /** unique or primary key constraint */
  StatusPkey = 'status_pkey'
}

/** input type for inserting data into table "master.status" */
export type Master_Status_Insert_Input = {
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['uuid']>;
  name?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** aggregate max on columns */
export type Master_Status_Max_Fields = {
  __typename?: 'master_status_max_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['uuid']>;
  name?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** aggregate min on columns */
export type Master_Status_Min_Fields = {
  __typename?: 'master_status_min_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['uuid']>;
  name?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** response of any mutation on the table "master.status" */
export type Master_Status_Mutation_Response = {
  __typename?: 'master_status_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Master_Status>;
};

/** input type for inserting object relation for remote table "master.status" */
export type Master_Status_Obj_Rel_Insert_Input = {
  data: Master_Status_Insert_Input;
  /** on conflict condition */
  on_conflict?: Maybe<Master_Status_On_Conflict>;
};

/** on conflict condition type for table "master.status" */
export type Master_Status_On_Conflict = {
  constraint: Master_Status_Constraint;
  update_columns?: Array<Master_Status_Update_Column>;
  where?: Maybe<Master_Status_Bool_Exp>;
};

/** Ordering options when selecting data from "master.status". */
export type Master_Status_Order_By = {
  created_at?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  name?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
};

/** primary key columns input for table: master_status */
export type Master_Status_Pk_Columns_Input = {
  id: Scalars['uuid'];
};

/** select columns of table "master.status" */
export enum Master_Status_Select_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name',
  /** column name */
  UpdatedAt = 'updated_at'
}

/** input type for updating data in table "master.status" */
export type Master_Status_Set_Input = {
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['uuid']>;
  name?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** update columns of table "master.status" */
export enum Master_Status_Update_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name',
  /** column name */
  UpdatedAt = 'updated_at'
}

/** columns and relationships of "master.users" */
export type Master_Users = {
  __typename?: 'master_users';
  address_id?: Maybe<Scalars['uuid']>;
  created_at: Scalars['timestamptz'];
  email: Scalars['String'];
  first_name: Scalars['String'];
  id: Scalars['uuid'];
  last_name: Scalars['String'];
  password: Scalars['String'];
  profile_image_id?: Maybe<Scalars['uuid']>;
  role: Scalars['String'];
  updated_at: Scalars['timestamptz'];
};

/** aggregated selection of "master.users" */
export type Master_Users_Aggregate = {
  __typename?: 'master_users_aggregate';
  aggregate?: Maybe<Master_Users_Aggregate_Fields>;
  nodes: Array<Master_Users>;
};

/** aggregate fields of "master.users" */
export type Master_Users_Aggregate_Fields = {
  __typename?: 'master_users_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<Master_Users_Max_Fields>;
  min?: Maybe<Master_Users_Min_Fields>;
};


/** aggregate fields of "master.users" */
export type Master_Users_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Master_Users_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** Boolean expression to filter rows from the table "master.users". All fields are combined with a logical 'AND'. */
export type Master_Users_Bool_Exp = {
  _and?: Maybe<Array<Master_Users_Bool_Exp>>;
  _not?: Maybe<Master_Users_Bool_Exp>;
  _or?: Maybe<Array<Master_Users_Bool_Exp>>;
  address_id?: Maybe<Uuid_Comparison_Exp>;
  created_at?: Maybe<Timestamptz_Comparison_Exp>;
  email?: Maybe<String_Comparison_Exp>;
  first_name?: Maybe<String_Comparison_Exp>;
  id?: Maybe<Uuid_Comparison_Exp>;
  last_name?: Maybe<String_Comparison_Exp>;
  password?: Maybe<String_Comparison_Exp>;
  profile_image_id?: Maybe<Uuid_Comparison_Exp>;
  role?: Maybe<String_Comparison_Exp>;
  updated_at?: Maybe<Timestamptz_Comparison_Exp>;
};

/** unique or primary key constraints on table "master.users" */
export enum Master_Users_Constraint {
  /** unique or primary key constraint */
  UsersEmailKey = 'users_email_key',
  /** unique or primary key constraint */
  UsersPkey = 'users_pkey'
}

/** input type for inserting data into table "master.users" */
export type Master_Users_Insert_Input = {
  address_id?: Maybe<Scalars['uuid']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  email?: Maybe<Scalars['String']>;
  first_name?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['uuid']>;
  last_name?: Maybe<Scalars['String']>;
  password?: Maybe<Scalars['String']>;
  profile_image_id?: Maybe<Scalars['uuid']>;
  role?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** aggregate max on columns */
export type Master_Users_Max_Fields = {
  __typename?: 'master_users_max_fields';
  address_id?: Maybe<Scalars['uuid']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  email?: Maybe<Scalars['String']>;
  first_name?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['uuid']>;
  last_name?: Maybe<Scalars['String']>;
  password?: Maybe<Scalars['String']>;
  profile_image_id?: Maybe<Scalars['uuid']>;
  role?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** aggregate min on columns */
export type Master_Users_Min_Fields = {
  __typename?: 'master_users_min_fields';
  address_id?: Maybe<Scalars['uuid']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  email?: Maybe<Scalars['String']>;
  first_name?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['uuid']>;
  last_name?: Maybe<Scalars['String']>;
  password?: Maybe<Scalars['String']>;
  profile_image_id?: Maybe<Scalars['uuid']>;
  role?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** response of any mutation on the table "master.users" */
export type Master_Users_Mutation_Response = {
  __typename?: 'master_users_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Master_Users>;
};

/** input type for inserting object relation for remote table "master.users" */
export type Master_Users_Obj_Rel_Insert_Input = {
  data: Master_Users_Insert_Input;
  /** on conflict condition */
  on_conflict?: Maybe<Master_Users_On_Conflict>;
};

/** on conflict condition type for table "master.users" */
export type Master_Users_On_Conflict = {
  constraint: Master_Users_Constraint;
  update_columns?: Array<Master_Users_Update_Column>;
  where?: Maybe<Master_Users_Bool_Exp>;
};

/** Ordering options when selecting data from "master.users". */
export type Master_Users_Order_By = {
  address_id?: Maybe<Order_By>;
  created_at?: Maybe<Order_By>;
  email?: Maybe<Order_By>;
  first_name?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  last_name?: Maybe<Order_By>;
  password?: Maybe<Order_By>;
  profile_image_id?: Maybe<Order_By>;
  role?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
};

/** primary key columns input for table: master_users */
export type Master_Users_Pk_Columns_Input = {
  id: Scalars['uuid'];
};

/** select columns of table "master.users" */
export enum Master_Users_Select_Column {
  /** column name */
  AddressId = 'address_id',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Email = 'email',
  /** column name */
  FirstName = 'first_name',
  /** column name */
  Id = 'id',
  /** column name */
  LastName = 'last_name',
  /** column name */
  Password = 'password',
  /** column name */
  ProfileImageId = 'profile_image_id',
  /** column name */
  Role = 'role',
  /** column name */
  UpdatedAt = 'updated_at'
}

/** input type for updating data in table "master.users" */
export type Master_Users_Set_Input = {
  address_id?: Maybe<Scalars['uuid']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  email?: Maybe<Scalars['String']>;
  first_name?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['uuid']>;
  last_name?: Maybe<Scalars['String']>;
  password?: Maybe<Scalars['String']>;
  profile_image_id?: Maybe<Scalars['uuid']>;
  role?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** update columns of table "master.users" */
export enum Master_Users_Update_Column {
  /** column name */
  AddressId = 'address_id',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Email = 'email',
  /** column name */
  FirstName = 'first_name',
  /** column name */
  Id = 'id',
  /** column name */
  LastName = 'last_name',
  /** column name */
  Password = 'password',
  /** column name */
  ProfileImageId = 'profile_image_id',
  /** column name */
  Role = 'role',
  /** column name */
  UpdatedAt = 'updated_at'
}

/** columns and relationships of "master.work_category" */
export type Master_Work_Category = {
  __typename?: 'master_work_category';
  created_at: Scalars['timestamptz'];
  id: Scalars['uuid'];
  name: Scalars['String'];
  updated_at: Scalars['timestamptz'];
};

/** aggregated selection of "master.work_category" */
export type Master_Work_Category_Aggregate = {
  __typename?: 'master_work_category_aggregate';
  aggregate?: Maybe<Master_Work_Category_Aggregate_Fields>;
  nodes: Array<Master_Work_Category>;
};

/** aggregate fields of "master.work_category" */
export type Master_Work_Category_Aggregate_Fields = {
  __typename?: 'master_work_category_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<Master_Work_Category_Max_Fields>;
  min?: Maybe<Master_Work_Category_Min_Fields>;
};


/** aggregate fields of "master.work_category" */
export type Master_Work_Category_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Master_Work_Category_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** Boolean expression to filter rows from the table "master.work_category". All fields are combined with a logical 'AND'. */
export type Master_Work_Category_Bool_Exp = {
  _and?: Maybe<Array<Master_Work_Category_Bool_Exp>>;
  _not?: Maybe<Master_Work_Category_Bool_Exp>;
  _or?: Maybe<Array<Master_Work_Category_Bool_Exp>>;
  created_at?: Maybe<Timestamptz_Comparison_Exp>;
  id?: Maybe<Uuid_Comparison_Exp>;
  name?: Maybe<String_Comparison_Exp>;
  updated_at?: Maybe<Timestamptz_Comparison_Exp>;
};

/** unique or primary key constraints on table "master.work_category" */
export enum Master_Work_Category_Constraint {
  /** unique or primary key constraint */
  WorkCategoryNameKey = 'work_category_name_key',
  /** unique or primary key constraint */
  WorkCategoryPkey = 'work_category_pkey'
}

/** input type for inserting data into table "master.work_category" */
export type Master_Work_Category_Insert_Input = {
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['uuid']>;
  name?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** aggregate max on columns */
export type Master_Work_Category_Max_Fields = {
  __typename?: 'master_work_category_max_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['uuid']>;
  name?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** aggregate min on columns */
export type Master_Work_Category_Min_Fields = {
  __typename?: 'master_work_category_min_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['uuid']>;
  name?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** response of any mutation on the table "master.work_category" */
export type Master_Work_Category_Mutation_Response = {
  __typename?: 'master_work_category_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Master_Work_Category>;
};

/** on conflict condition type for table "master.work_category" */
export type Master_Work_Category_On_Conflict = {
  constraint: Master_Work_Category_Constraint;
  update_columns?: Array<Master_Work_Category_Update_Column>;
  where?: Maybe<Master_Work_Category_Bool_Exp>;
};

/** Ordering options when selecting data from "master.work_category". */
export type Master_Work_Category_Order_By = {
  created_at?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  name?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
};

/** primary key columns input for table: master_work_category */
export type Master_Work_Category_Pk_Columns_Input = {
  id: Scalars['uuid'];
};

/** select columns of table "master.work_category" */
export enum Master_Work_Category_Select_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name',
  /** column name */
  UpdatedAt = 'updated_at'
}

/** input type for updating data in table "master.work_category" */
export type Master_Work_Category_Set_Input = {
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['uuid']>;
  name?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** update columns of table "master.work_category" */
export enum Master_Work_Category_Update_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name',
  /** column name */
  UpdatedAt = 'updated_at'
}

/** mutation root */
export type Mutation_Root = {
  __typename?: 'mutation_root';
  /** delete data from the table: "address" */
  delete_address?: Maybe<Address_Mutation_Response>;
  /** delete single row from the table: "address" */
  delete_address_by_pk?: Maybe<Address>;
  /** delete data from the table: "categories" */
  delete_categories?: Maybe<Categories_Mutation_Response>;
  /** delete single row from the table: "categories" */
  delete_categories_by_pk?: Maybe<Categories>;
  /** delete data from the table: "customer_customer_demo" */
  delete_customer_customer_demo?: Maybe<Customer_Customer_Demo_Mutation_Response>;
  /** delete single row from the table: "customer_customer_demo" */
  delete_customer_customer_demo_by_pk?: Maybe<Customer_Customer_Demo>;
  /** delete data from the table: "customer_demographics" */
  delete_customer_demographics?: Maybe<Customer_Demographics_Mutation_Response>;
  /** delete single row from the table: "customer_demographics" */
  delete_customer_demographics_by_pk?: Maybe<Customer_Demographics>;
  /** delete data from the table: "customers" */
  delete_customers?: Maybe<Customers_Mutation_Response>;
  /** delete single row from the table: "customers" */
  delete_customers_by_pk?: Maybe<Customers>;
  /** delete data from the table: "employee_territories" */
  delete_employee_territories?: Maybe<Employee_Territories_Mutation_Response>;
  /** delete single row from the table: "employee_territories" */
  delete_employee_territories_by_pk?: Maybe<Employee_Territories>;
  /** delete data from the table: "employees" */
  delete_employees?: Maybe<Employees_Mutation_Response>;
  /** delete single row from the table: "employees" */
  delete_employees_by_pk?: Maybe<Employees>;
  /** delete data from the table: "images" */
  delete_images?: Maybe<Images_Mutation_Response>;
  /** delete single row from the table: "images" */
  delete_images_by_pk?: Maybe<Images>;
  /** delete data from the table: "master.canned_response" */
  delete_master_canned_response?: Maybe<Master_Canned_Response_Mutation_Response>;
  /** delete single row from the table: "master.canned_response" */
  delete_master_canned_response_by_pk?: Maybe<Master_Canned_Response>;
  /** delete data from the table: "master.city" */
  delete_master_city?: Maybe<Master_City_Mutation_Response>;
  /** delete single row from the table: "master.city" */
  delete_master_city_by_pk?: Maybe<Master_City>;
  /** delete data from the table: "master.country" */
  delete_master_country?: Maybe<Master_Country_Mutation_Response>;
  /** delete single row from the table: "master.country" */
  delete_master_country_by_pk?: Maybe<Master_Country>;
  /** delete data from the table: "master.customers" */
  delete_master_customers?: Maybe<Master_Customers_Mutation_Response>;
  /** delete single row from the table: "master.customers" */
  delete_master_customers_by_pk?: Maybe<Master_Customers>;
  /** delete data from the table: "master.state" */
  delete_master_state?: Maybe<Master_State_Mutation_Response>;
  /** delete single row from the table: "master.state" */
  delete_master_state_by_pk?: Maybe<Master_State>;
  /** delete data from the table: "master.status" */
  delete_master_status?: Maybe<Master_Status_Mutation_Response>;
  /** delete single row from the table: "master.status" */
  delete_master_status_by_pk?: Maybe<Master_Status>;
  /** delete data from the table: "master.users" */
  delete_master_users?: Maybe<Master_Users_Mutation_Response>;
  /** delete single row from the table: "master.users" */
  delete_master_users_by_pk?: Maybe<Master_Users>;
  /** delete data from the table: "master.work_category" */
  delete_master_work_category?: Maybe<Master_Work_Category_Mutation_Response>;
  /** delete single row from the table: "master.work_category" */
  delete_master_work_category_by_pk?: Maybe<Master_Work_Category>;
  /** delete data from the table: "notes" */
  delete_notes?: Maybe<Notes_Mutation_Response>;
  /** delete single row from the table: "notes" */
  delete_notes_by_pk?: Maybe<Notes>;
  /** delete data from the table: "order_details" */
  delete_order_details?: Maybe<Order_Details_Mutation_Response>;
  /** delete single row from the table: "order_details" */
  delete_order_details_by_pk?: Maybe<Order_Details>;
  /** delete data from the table: "orders" */
  delete_orders?: Maybe<Orders_Mutation_Response>;
  /** delete single row from the table: "orders" */
  delete_orders_by_pk?: Maybe<Orders>;
  /** delete data from the table: "products" */
  delete_products?: Maybe<Products_Mutation_Response>;
  /** delete single row from the table: "products" */
  delete_products_by_pk?: Maybe<Products>;
  /** delete data from the table: "region" */
  delete_region?: Maybe<Region_Mutation_Response>;
  /** delete single row from the table: "region" */
  delete_region_by_pk?: Maybe<Region>;
  /** delete data from the table: "shippers" */
  delete_shippers?: Maybe<Shippers_Mutation_Response>;
  /** delete single row from the table: "shippers" */
  delete_shippers_by_pk?: Maybe<Shippers>;
  /** delete data from the table: "suppliers" */
  delete_suppliers?: Maybe<Suppliers_Mutation_Response>;
  /** delete single row from the table: "suppliers" */
  delete_suppliers_by_pk?: Maybe<Suppliers>;
  /** delete data from the table: "territories" */
  delete_territories?: Maybe<Territories_Mutation_Response>;
  /** delete single row from the table: "territories" */
  delete_territories_by_pk?: Maybe<Territories>;
  /** delete data from the table: "us_states" */
  delete_us_states?: Maybe<Us_States_Mutation_Response>;
  /** delete single row from the table: "us_states" */
  delete_us_states_by_pk?: Maybe<Us_States>;
  /** delete data from the table: "work_order" */
  delete_work_order?: Maybe<Work_Order_Mutation_Response>;
  /** delete single row from the table: "work_order" */
  delete_work_order_by_pk?: Maybe<Work_Order>;
  /** insert data into the table: "address" */
  insert_address?: Maybe<Address_Mutation_Response>;
  /** insert a single row into the table: "address" */
  insert_address_one?: Maybe<Address>;
  /** insert data into the table: "categories" */
  insert_categories?: Maybe<Categories_Mutation_Response>;
  /** insert a single row into the table: "categories" */
  insert_categories_one?: Maybe<Categories>;
  /** insert data into the table: "customer_customer_demo" */
  insert_customer_customer_demo?: Maybe<Customer_Customer_Demo_Mutation_Response>;
  /** insert a single row into the table: "customer_customer_demo" */
  insert_customer_customer_demo_one?: Maybe<Customer_Customer_Demo>;
  /** insert data into the table: "customer_demographics" */
  insert_customer_demographics?: Maybe<Customer_Demographics_Mutation_Response>;
  /** insert a single row into the table: "customer_demographics" */
  insert_customer_demographics_one?: Maybe<Customer_Demographics>;
  /** insert data into the table: "customers" */
  insert_customers?: Maybe<Customers_Mutation_Response>;
  /** insert a single row into the table: "customers" */
  insert_customers_one?: Maybe<Customers>;
  /** insert data into the table: "employee_territories" */
  insert_employee_territories?: Maybe<Employee_Territories_Mutation_Response>;
  /** insert a single row into the table: "employee_territories" */
  insert_employee_territories_one?: Maybe<Employee_Territories>;
  /** insert data into the table: "employees" */
  insert_employees?: Maybe<Employees_Mutation_Response>;
  /** insert a single row into the table: "employees" */
  insert_employees_one?: Maybe<Employees>;
  /** insert data into the table: "images" */
  insert_images?: Maybe<Images_Mutation_Response>;
  /** insert a single row into the table: "images" */
  insert_images_one?: Maybe<Images>;
  /** insert data into the table: "master.canned_response" */
  insert_master_canned_response?: Maybe<Master_Canned_Response_Mutation_Response>;
  /** insert a single row into the table: "master.canned_response" */
  insert_master_canned_response_one?: Maybe<Master_Canned_Response>;
  /** insert data into the table: "master.city" */
  insert_master_city?: Maybe<Master_City_Mutation_Response>;
  /** insert a single row into the table: "master.city" */
  insert_master_city_one?: Maybe<Master_City>;
  /** insert data into the table: "master.country" */
  insert_master_country?: Maybe<Master_Country_Mutation_Response>;
  /** insert a single row into the table: "master.country" */
  insert_master_country_one?: Maybe<Master_Country>;
  /** insert data into the table: "master.customers" */
  insert_master_customers?: Maybe<Master_Customers_Mutation_Response>;
  /** insert a single row into the table: "master.customers" */
  insert_master_customers_one?: Maybe<Master_Customers>;
  /** insert data into the table: "master.state" */
  insert_master_state?: Maybe<Master_State_Mutation_Response>;
  /** insert a single row into the table: "master.state" */
  insert_master_state_one?: Maybe<Master_State>;
  /** insert data into the table: "master.status" */
  insert_master_status?: Maybe<Master_Status_Mutation_Response>;
  /** insert a single row into the table: "master.status" */
  insert_master_status_one?: Maybe<Master_Status>;
  /** insert data into the table: "master.users" */
  insert_master_users?: Maybe<Master_Users_Mutation_Response>;
  /** insert a single row into the table: "master.users" */
  insert_master_users_one?: Maybe<Master_Users>;
  /** insert data into the table: "master.work_category" */
  insert_master_work_category?: Maybe<Master_Work_Category_Mutation_Response>;
  /** insert a single row into the table: "master.work_category" */
  insert_master_work_category_one?: Maybe<Master_Work_Category>;
  /** insert data into the table: "notes" */
  insert_notes?: Maybe<Notes_Mutation_Response>;
  /** insert a single row into the table: "notes" */
  insert_notes_one?: Maybe<Notes>;
  /** insert data into the table: "order_details" */
  insert_order_details?: Maybe<Order_Details_Mutation_Response>;
  /** insert a single row into the table: "order_details" */
  insert_order_details_one?: Maybe<Order_Details>;
  /** insert data into the table: "orders" */
  insert_orders?: Maybe<Orders_Mutation_Response>;
  /** insert a single row into the table: "orders" */
  insert_orders_one?: Maybe<Orders>;
  /** insert data into the table: "products" */
  insert_products?: Maybe<Products_Mutation_Response>;
  /** insert a single row into the table: "products" */
  insert_products_one?: Maybe<Products>;
  /** insert data into the table: "region" */
  insert_region?: Maybe<Region_Mutation_Response>;
  /** insert a single row into the table: "region" */
  insert_region_one?: Maybe<Region>;
  /** insert data into the table: "shippers" */
  insert_shippers?: Maybe<Shippers_Mutation_Response>;
  /** insert a single row into the table: "shippers" */
  insert_shippers_one?: Maybe<Shippers>;
  /** insert data into the table: "suppliers" */
  insert_suppliers?: Maybe<Suppliers_Mutation_Response>;
  /** insert a single row into the table: "suppliers" */
  insert_suppliers_one?: Maybe<Suppliers>;
  /** insert data into the table: "territories" */
  insert_territories?: Maybe<Territories_Mutation_Response>;
  /** insert a single row into the table: "territories" */
  insert_territories_one?: Maybe<Territories>;
  /** insert data into the table: "us_states" */
  insert_us_states?: Maybe<Us_States_Mutation_Response>;
  /** insert a single row into the table: "us_states" */
  insert_us_states_one?: Maybe<Us_States>;
  /** insert data into the table: "work_order" */
  insert_work_order?: Maybe<Work_Order_Mutation_Response>;
  /** insert a single row into the table: "work_order" */
  insert_work_order_one?: Maybe<Work_Order>;
  /** update data of the table: "address" */
  update_address?: Maybe<Address_Mutation_Response>;
  /** update single row of the table: "address" */
  update_address_by_pk?: Maybe<Address>;
  /** update data of the table: "categories" */
  update_categories?: Maybe<Categories_Mutation_Response>;
  /** update single row of the table: "categories" */
  update_categories_by_pk?: Maybe<Categories>;
  /** update data of the table: "customer_customer_demo" */
  update_customer_customer_demo?: Maybe<Customer_Customer_Demo_Mutation_Response>;
  /** update single row of the table: "customer_customer_demo" */
  update_customer_customer_demo_by_pk?: Maybe<Customer_Customer_Demo>;
  /** update data of the table: "customer_demographics" */
  update_customer_demographics?: Maybe<Customer_Demographics_Mutation_Response>;
  /** update single row of the table: "customer_demographics" */
  update_customer_demographics_by_pk?: Maybe<Customer_Demographics>;
  /** update data of the table: "customers" */
  update_customers?: Maybe<Customers_Mutation_Response>;
  /** update single row of the table: "customers" */
  update_customers_by_pk?: Maybe<Customers>;
  /** update data of the table: "employee_territories" */
  update_employee_territories?: Maybe<Employee_Territories_Mutation_Response>;
  /** update single row of the table: "employee_territories" */
  update_employee_territories_by_pk?: Maybe<Employee_Territories>;
  /** update data of the table: "employees" */
  update_employees?: Maybe<Employees_Mutation_Response>;
  /** update single row of the table: "employees" */
  update_employees_by_pk?: Maybe<Employees>;
  /** update data of the table: "images" */
  update_images?: Maybe<Images_Mutation_Response>;
  /** update single row of the table: "images" */
  update_images_by_pk?: Maybe<Images>;
  /** update data of the table: "master.canned_response" */
  update_master_canned_response?: Maybe<Master_Canned_Response_Mutation_Response>;
  /** update single row of the table: "master.canned_response" */
  update_master_canned_response_by_pk?: Maybe<Master_Canned_Response>;
  /** update data of the table: "master.city" */
  update_master_city?: Maybe<Master_City_Mutation_Response>;
  /** update single row of the table: "master.city" */
  update_master_city_by_pk?: Maybe<Master_City>;
  /** update data of the table: "master.country" */
  update_master_country?: Maybe<Master_Country_Mutation_Response>;
  /** update single row of the table: "master.country" */
  update_master_country_by_pk?: Maybe<Master_Country>;
  /** update data of the table: "master.customers" */
  update_master_customers?: Maybe<Master_Customers_Mutation_Response>;
  /** update single row of the table: "master.customers" */
  update_master_customers_by_pk?: Maybe<Master_Customers>;
  /** update data of the table: "master.state" */
  update_master_state?: Maybe<Master_State_Mutation_Response>;
  /** update single row of the table: "master.state" */
  update_master_state_by_pk?: Maybe<Master_State>;
  /** update data of the table: "master.status" */
  update_master_status?: Maybe<Master_Status_Mutation_Response>;
  /** update single row of the table: "master.status" */
  update_master_status_by_pk?: Maybe<Master_Status>;
  /** update data of the table: "master.users" */
  update_master_users?: Maybe<Master_Users_Mutation_Response>;
  /** update single row of the table: "master.users" */
  update_master_users_by_pk?: Maybe<Master_Users>;
  /** update data of the table: "master.work_category" */
  update_master_work_category?: Maybe<Master_Work_Category_Mutation_Response>;
  /** update single row of the table: "master.work_category" */
  update_master_work_category_by_pk?: Maybe<Master_Work_Category>;
  /** update data of the table: "notes" */
  update_notes?: Maybe<Notes_Mutation_Response>;
  /** update single row of the table: "notes" */
  update_notes_by_pk?: Maybe<Notes>;
  /** update data of the table: "order_details" */
  update_order_details?: Maybe<Order_Details_Mutation_Response>;
  /** update single row of the table: "order_details" */
  update_order_details_by_pk?: Maybe<Order_Details>;
  /** update data of the table: "orders" */
  update_orders?: Maybe<Orders_Mutation_Response>;
  /** update single row of the table: "orders" */
  update_orders_by_pk?: Maybe<Orders>;
  /** update data of the table: "products" */
  update_products?: Maybe<Products_Mutation_Response>;
  /** update single row of the table: "products" */
  update_products_by_pk?: Maybe<Products>;
  /** update data of the table: "region" */
  update_region?: Maybe<Region_Mutation_Response>;
  /** update single row of the table: "region" */
  update_region_by_pk?: Maybe<Region>;
  /** update data of the table: "shippers" */
  update_shippers?: Maybe<Shippers_Mutation_Response>;
  /** update single row of the table: "shippers" */
  update_shippers_by_pk?: Maybe<Shippers>;
  /** update data of the table: "suppliers" */
  update_suppliers?: Maybe<Suppliers_Mutation_Response>;
  /** update single row of the table: "suppliers" */
  update_suppliers_by_pk?: Maybe<Suppliers>;
  /** update data of the table: "territories" */
  update_territories?: Maybe<Territories_Mutation_Response>;
  /** update single row of the table: "territories" */
  update_territories_by_pk?: Maybe<Territories>;
  /** update data of the table: "us_states" */
  update_us_states?: Maybe<Us_States_Mutation_Response>;
  /** update single row of the table: "us_states" */
  update_us_states_by_pk?: Maybe<Us_States>;
  /** update data of the table: "work_order" */
  update_work_order?: Maybe<Work_Order_Mutation_Response>;
  /** update single row of the table: "work_order" */
  update_work_order_by_pk?: Maybe<Work_Order>;
};


/** mutation root */
export type Mutation_RootDelete_AddressArgs = {
  where: Address_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Address_By_PkArgs = {
  id: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootDelete_CategoriesArgs = {
  where: Categories_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Categories_By_PkArgs = {
  category_id: Scalars['smallint'];
};


/** mutation root */
export type Mutation_RootDelete_Customer_Customer_DemoArgs = {
  where: Customer_Customer_Demo_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Customer_Customer_Demo_By_PkArgs = {
  customer_id: Scalars['bpchar'];
  customer_type_id: Scalars['bpchar'];
};


/** mutation root */
export type Mutation_RootDelete_Customer_DemographicsArgs = {
  where: Customer_Demographics_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Customer_Demographics_By_PkArgs = {
  customer_type_id: Scalars['bpchar'];
};


/** mutation root */
export type Mutation_RootDelete_CustomersArgs = {
  where: Customers_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Customers_By_PkArgs = {
  customer_id: Scalars['bpchar'];
};


/** mutation root */
export type Mutation_RootDelete_Employee_TerritoriesArgs = {
  where: Employee_Territories_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Employee_Territories_By_PkArgs = {
  employee_id: Scalars['smallint'];
  territory_id: Scalars['String'];
};


/** mutation root */
export type Mutation_RootDelete_EmployeesArgs = {
  where: Employees_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Employees_By_PkArgs = {
  employee_id: Scalars['smallint'];
};


/** mutation root */
export type Mutation_RootDelete_ImagesArgs = {
  where: Images_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Images_By_PkArgs = {
  id: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootDelete_Master_Canned_ResponseArgs = {
  where: Master_Canned_Response_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Master_Canned_Response_By_PkArgs = {
  id: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootDelete_Master_CityArgs = {
  where: Master_City_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Master_City_By_PkArgs = {
  id: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootDelete_Master_CountryArgs = {
  where: Master_Country_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Master_Country_By_PkArgs = {
  id: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootDelete_Master_CustomersArgs = {
  where: Master_Customers_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Master_Customers_By_PkArgs = {
  id: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootDelete_Master_StateArgs = {
  where: Master_State_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Master_State_By_PkArgs = {
  id: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootDelete_Master_StatusArgs = {
  where: Master_Status_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Master_Status_By_PkArgs = {
  id: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootDelete_Master_UsersArgs = {
  where: Master_Users_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Master_Users_By_PkArgs = {
  id: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootDelete_Master_Work_CategoryArgs = {
  where: Master_Work_Category_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Master_Work_Category_By_PkArgs = {
  id: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootDelete_NotesArgs = {
  where: Notes_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Notes_By_PkArgs = {
  id: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootDelete_Order_DetailsArgs = {
  where: Order_Details_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Order_Details_By_PkArgs = {
  order_id: Scalars['smallint'];
  product_id: Scalars['smallint'];
};


/** mutation root */
export type Mutation_RootDelete_OrdersArgs = {
  where: Orders_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Orders_By_PkArgs = {
  order_id: Scalars['smallint'];
};


/** mutation root */
export type Mutation_RootDelete_ProductsArgs = {
  where: Products_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Products_By_PkArgs = {
  product_id: Scalars['smallint'];
};


/** mutation root */
export type Mutation_RootDelete_RegionArgs = {
  where: Region_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Region_By_PkArgs = {
  region_id: Scalars['smallint'];
};


/** mutation root */
export type Mutation_RootDelete_ShippersArgs = {
  where: Shippers_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Shippers_By_PkArgs = {
  shipper_id: Scalars['smallint'];
};


/** mutation root */
export type Mutation_RootDelete_SuppliersArgs = {
  where: Suppliers_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Suppliers_By_PkArgs = {
  supplier_id: Scalars['smallint'];
};


/** mutation root */
export type Mutation_RootDelete_TerritoriesArgs = {
  where: Territories_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Territories_By_PkArgs = {
  territory_id: Scalars['String'];
};


/** mutation root */
export type Mutation_RootDelete_Us_StatesArgs = {
  where: Us_States_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Us_States_By_PkArgs = {
  state_id: Scalars['smallint'];
};


/** mutation root */
export type Mutation_RootDelete_Work_OrderArgs = {
  where: Work_Order_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Work_Order_By_PkArgs = {
  id: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootInsert_AddressArgs = {
  objects: Array<Address_Insert_Input>;
  on_conflict?: Maybe<Address_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Address_OneArgs = {
  object: Address_Insert_Input;
  on_conflict?: Maybe<Address_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_CategoriesArgs = {
  objects: Array<Categories_Insert_Input>;
  on_conflict?: Maybe<Categories_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Categories_OneArgs = {
  object: Categories_Insert_Input;
  on_conflict?: Maybe<Categories_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Customer_Customer_DemoArgs = {
  objects: Array<Customer_Customer_Demo_Insert_Input>;
  on_conflict?: Maybe<Customer_Customer_Demo_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Customer_Customer_Demo_OneArgs = {
  object: Customer_Customer_Demo_Insert_Input;
  on_conflict?: Maybe<Customer_Customer_Demo_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Customer_DemographicsArgs = {
  objects: Array<Customer_Demographics_Insert_Input>;
  on_conflict?: Maybe<Customer_Demographics_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Customer_Demographics_OneArgs = {
  object: Customer_Demographics_Insert_Input;
  on_conflict?: Maybe<Customer_Demographics_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_CustomersArgs = {
  objects: Array<Customers_Insert_Input>;
  on_conflict?: Maybe<Customers_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Customers_OneArgs = {
  object: Customers_Insert_Input;
  on_conflict?: Maybe<Customers_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Employee_TerritoriesArgs = {
  objects: Array<Employee_Territories_Insert_Input>;
  on_conflict?: Maybe<Employee_Territories_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Employee_Territories_OneArgs = {
  object: Employee_Territories_Insert_Input;
  on_conflict?: Maybe<Employee_Territories_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_EmployeesArgs = {
  objects: Array<Employees_Insert_Input>;
  on_conflict?: Maybe<Employees_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Employees_OneArgs = {
  object: Employees_Insert_Input;
  on_conflict?: Maybe<Employees_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_ImagesArgs = {
  objects: Array<Images_Insert_Input>;
  on_conflict?: Maybe<Images_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Images_OneArgs = {
  object: Images_Insert_Input;
  on_conflict?: Maybe<Images_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Master_Canned_ResponseArgs = {
  objects: Array<Master_Canned_Response_Insert_Input>;
  on_conflict?: Maybe<Master_Canned_Response_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Master_Canned_Response_OneArgs = {
  object: Master_Canned_Response_Insert_Input;
  on_conflict?: Maybe<Master_Canned_Response_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Master_CityArgs = {
  objects: Array<Master_City_Insert_Input>;
  on_conflict?: Maybe<Master_City_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Master_City_OneArgs = {
  object: Master_City_Insert_Input;
  on_conflict?: Maybe<Master_City_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Master_CountryArgs = {
  objects: Array<Master_Country_Insert_Input>;
  on_conflict?: Maybe<Master_Country_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Master_Country_OneArgs = {
  object: Master_Country_Insert_Input;
  on_conflict?: Maybe<Master_Country_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Master_CustomersArgs = {
  objects: Array<Master_Customers_Insert_Input>;
  on_conflict?: Maybe<Master_Customers_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Master_Customers_OneArgs = {
  object: Master_Customers_Insert_Input;
  on_conflict?: Maybe<Master_Customers_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Master_StateArgs = {
  objects: Array<Master_State_Insert_Input>;
  on_conflict?: Maybe<Master_State_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Master_State_OneArgs = {
  object: Master_State_Insert_Input;
  on_conflict?: Maybe<Master_State_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Master_StatusArgs = {
  objects: Array<Master_Status_Insert_Input>;
  on_conflict?: Maybe<Master_Status_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Master_Status_OneArgs = {
  object: Master_Status_Insert_Input;
  on_conflict?: Maybe<Master_Status_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Master_UsersArgs = {
  objects: Array<Master_Users_Insert_Input>;
  on_conflict?: Maybe<Master_Users_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Master_Users_OneArgs = {
  object: Master_Users_Insert_Input;
  on_conflict?: Maybe<Master_Users_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Master_Work_CategoryArgs = {
  objects: Array<Master_Work_Category_Insert_Input>;
  on_conflict?: Maybe<Master_Work_Category_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Master_Work_Category_OneArgs = {
  object: Master_Work_Category_Insert_Input;
  on_conflict?: Maybe<Master_Work_Category_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_NotesArgs = {
  objects: Array<Notes_Insert_Input>;
  on_conflict?: Maybe<Notes_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Notes_OneArgs = {
  object: Notes_Insert_Input;
  on_conflict?: Maybe<Notes_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Order_DetailsArgs = {
  objects: Array<Order_Details_Insert_Input>;
  on_conflict?: Maybe<Order_Details_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Order_Details_OneArgs = {
  object: Order_Details_Insert_Input;
  on_conflict?: Maybe<Order_Details_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_OrdersArgs = {
  objects: Array<Orders_Insert_Input>;
  on_conflict?: Maybe<Orders_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Orders_OneArgs = {
  object: Orders_Insert_Input;
  on_conflict?: Maybe<Orders_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_ProductsArgs = {
  objects: Array<Products_Insert_Input>;
  on_conflict?: Maybe<Products_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Products_OneArgs = {
  object: Products_Insert_Input;
  on_conflict?: Maybe<Products_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_RegionArgs = {
  objects: Array<Region_Insert_Input>;
  on_conflict?: Maybe<Region_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Region_OneArgs = {
  object: Region_Insert_Input;
  on_conflict?: Maybe<Region_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_ShippersArgs = {
  objects: Array<Shippers_Insert_Input>;
  on_conflict?: Maybe<Shippers_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Shippers_OneArgs = {
  object: Shippers_Insert_Input;
  on_conflict?: Maybe<Shippers_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_SuppliersArgs = {
  objects: Array<Suppliers_Insert_Input>;
  on_conflict?: Maybe<Suppliers_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Suppliers_OneArgs = {
  object: Suppliers_Insert_Input;
  on_conflict?: Maybe<Suppliers_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_TerritoriesArgs = {
  objects: Array<Territories_Insert_Input>;
  on_conflict?: Maybe<Territories_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Territories_OneArgs = {
  object: Territories_Insert_Input;
  on_conflict?: Maybe<Territories_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Us_StatesArgs = {
  objects: Array<Us_States_Insert_Input>;
  on_conflict?: Maybe<Us_States_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Us_States_OneArgs = {
  object: Us_States_Insert_Input;
  on_conflict?: Maybe<Us_States_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Work_OrderArgs = {
  objects: Array<Work_Order_Insert_Input>;
  on_conflict?: Maybe<Work_Order_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Work_Order_OneArgs = {
  object: Work_Order_Insert_Input;
  on_conflict?: Maybe<Work_Order_On_Conflict>;
};


/** mutation root */
export type Mutation_RootUpdate_AddressArgs = {
  _set?: Maybe<Address_Set_Input>;
  where: Address_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Address_By_PkArgs = {
  _set?: Maybe<Address_Set_Input>;
  pk_columns: Address_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_CategoriesArgs = {
  _inc?: Maybe<Categories_Inc_Input>;
  _set?: Maybe<Categories_Set_Input>;
  where: Categories_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Categories_By_PkArgs = {
  _inc?: Maybe<Categories_Inc_Input>;
  _set?: Maybe<Categories_Set_Input>;
  pk_columns: Categories_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Customer_Customer_DemoArgs = {
  _set?: Maybe<Customer_Customer_Demo_Set_Input>;
  where: Customer_Customer_Demo_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Customer_Customer_Demo_By_PkArgs = {
  _set?: Maybe<Customer_Customer_Demo_Set_Input>;
  pk_columns: Customer_Customer_Demo_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Customer_DemographicsArgs = {
  _set?: Maybe<Customer_Demographics_Set_Input>;
  where: Customer_Demographics_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Customer_Demographics_By_PkArgs = {
  _set?: Maybe<Customer_Demographics_Set_Input>;
  pk_columns: Customer_Demographics_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_CustomersArgs = {
  _set?: Maybe<Customers_Set_Input>;
  where: Customers_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Customers_By_PkArgs = {
  _set?: Maybe<Customers_Set_Input>;
  pk_columns: Customers_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Employee_TerritoriesArgs = {
  _inc?: Maybe<Employee_Territories_Inc_Input>;
  _set?: Maybe<Employee_Territories_Set_Input>;
  where: Employee_Territories_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Employee_Territories_By_PkArgs = {
  _inc?: Maybe<Employee_Territories_Inc_Input>;
  _set?: Maybe<Employee_Territories_Set_Input>;
  pk_columns: Employee_Territories_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_EmployeesArgs = {
  _inc?: Maybe<Employees_Inc_Input>;
  _set?: Maybe<Employees_Set_Input>;
  where: Employees_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Employees_By_PkArgs = {
  _inc?: Maybe<Employees_Inc_Input>;
  _set?: Maybe<Employees_Set_Input>;
  pk_columns: Employees_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_ImagesArgs = {
  _set?: Maybe<Images_Set_Input>;
  where: Images_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Images_By_PkArgs = {
  _set?: Maybe<Images_Set_Input>;
  pk_columns: Images_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Master_Canned_ResponseArgs = {
  _set?: Maybe<Master_Canned_Response_Set_Input>;
  where: Master_Canned_Response_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Master_Canned_Response_By_PkArgs = {
  _set?: Maybe<Master_Canned_Response_Set_Input>;
  pk_columns: Master_Canned_Response_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Master_CityArgs = {
  _set?: Maybe<Master_City_Set_Input>;
  where: Master_City_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Master_City_By_PkArgs = {
  _set?: Maybe<Master_City_Set_Input>;
  pk_columns: Master_City_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Master_CountryArgs = {
  _set?: Maybe<Master_Country_Set_Input>;
  where: Master_Country_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Master_Country_By_PkArgs = {
  _set?: Maybe<Master_Country_Set_Input>;
  pk_columns: Master_Country_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Master_CustomersArgs = {
  _set?: Maybe<Master_Customers_Set_Input>;
  where: Master_Customers_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Master_Customers_By_PkArgs = {
  _set?: Maybe<Master_Customers_Set_Input>;
  pk_columns: Master_Customers_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Master_StateArgs = {
  _set?: Maybe<Master_State_Set_Input>;
  where: Master_State_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Master_State_By_PkArgs = {
  _set?: Maybe<Master_State_Set_Input>;
  pk_columns: Master_State_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Master_StatusArgs = {
  _set?: Maybe<Master_Status_Set_Input>;
  where: Master_Status_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Master_Status_By_PkArgs = {
  _set?: Maybe<Master_Status_Set_Input>;
  pk_columns: Master_Status_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Master_UsersArgs = {
  _set?: Maybe<Master_Users_Set_Input>;
  where: Master_Users_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Master_Users_By_PkArgs = {
  _set?: Maybe<Master_Users_Set_Input>;
  pk_columns: Master_Users_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Master_Work_CategoryArgs = {
  _set?: Maybe<Master_Work_Category_Set_Input>;
  where: Master_Work_Category_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Master_Work_Category_By_PkArgs = {
  _set?: Maybe<Master_Work_Category_Set_Input>;
  pk_columns: Master_Work_Category_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_NotesArgs = {
  _set?: Maybe<Notes_Set_Input>;
  where: Notes_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Notes_By_PkArgs = {
  _set?: Maybe<Notes_Set_Input>;
  pk_columns: Notes_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Order_DetailsArgs = {
  _inc?: Maybe<Order_Details_Inc_Input>;
  _set?: Maybe<Order_Details_Set_Input>;
  where: Order_Details_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Order_Details_By_PkArgs = {
  _inc?: Maybe<Order_Details_Inc_Input>;
  _set?: Maybe<Order_Details_Set_Input>;
  pk_columns: Order_Details_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_OrdersArgs = {
  _inc?: Maybe<Orders_Inc_Input>;
  _set?: Maybe<Orders_Set_Input>;
  where: Orders_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Orders_By_PkArgs = {
  _inc?: Maybe<Orders_Inc_Input>;
  _set?: Maybe<Orders_Set_Input>;
  pk_columns: Orders_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_ProductsArgs = {
  _inc?: Maybe<Products_Inc_Input>;
  _set?: Maybe<Products_Set_Input>;
  where: Products_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Products_By_PkArgs = {
  _inc?: Maybe<Products_Inc_Input>;
  _set?: Maybe<Products_Set_Input>;
  pk_columns: Products_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_RegionArgs = {
  _inc?: Maybe<Region_Inc_Input>;
  _set?: Maybe<Region_Set_Input>;
  where: Region_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Region_By_PkArgs = {
  _inc?: Maybe<Region_Inc_Input>;
  _set?: Maybe<Region_Set_Input>;
  pk_columns: Region_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_ShippersArgs = {
  _inc?: Maybe<Shippers_Inc_Input>;
  _set?: Maybe<Shippers_Set_Input>;
  where: Shippers_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Shippers_By_PkArgs = {
  _inc?: Maybe<Shippers_Inc_Input>;
  _set?: Maybe<Shippers_Set_Input>;
  pk_columns: Shippers_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_SuppliersArgs = {
  _inc?: Maybe<Suppliers_Inc_Input>;
  _set?: Maybe<Suppliers_Set_Input>;
  where: Suppliers_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Suppliers_By_PkArgs = {
  _inc?: Maybe<Suppliers_Inc_Input>;
  _set?: Maybe<Suppliers_Set_Input>;
  pk_columns: Suppliers_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_TerritoriesArgs = {
  _inc?: Maybe<Territories_Inc_Input>;
  _set?: Maybe<Territories_Set_Input>;
  where: Territories_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Territories_By_PkArgs = {
  _inc?: Maybe<Territories_Inc_Input>;
  _set?: Maybe<Territories_Set_Input>;
  pk_columns: Territories_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Us_StatesArgs = {
  _inc?: Maybe<Us_States_Inc_Input>;
  _set?: Maybe<Us_States_Set_Input>;
  where: Us_States_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Us_States_By_PkArgs = {
  _inc?: Maybe<Us_States_Inc_Input>;
  _set?: Maybe<Us_States_Set_Input>;
  pk_columns: Us_States_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Work_OrderArgs = {
  _set?: Maybe<Work_Order_Set_Input>;
  where: Work_Order_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Work_Order_By_PkArgs = {
  _set?: Maybe<Work_Order_Set_Input>;
  pk_columns: Work_Order_Pk_Columns_Input;
};

/** columns and relationships of "notes" */
export type Notes = {
  __typename?: 'notes';
  content: Scalars['String'];
  created_at: Scalars['timestamptz'];
  id: Scalars['uuid'];
  title: Scalars['String'];
  updated_at: Scalars['timestamptz'];
  user_id?: Maybe<Scalars['uuid']>;
  /** An array relationship */
  work_orders: Array<Work_Order>;
  /** An aggregate relationship */
  work_orders_aggregate: Work_Order_Aggregate;
};


/** columns and relationships of "notes" */
export type NotesWork_OrdersArgs = {
  distinct_on?: Maybe<Array<Work_Order_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Work_Order_Order_By>>;
  where?: Maybe<Work_Order_Bool_Exp>;
};


/** columns and relationships of "notes" */
export type NotesWork_Orders_AggregateArgs = {
  distinct_on?: Maybe<Array<Work_Order_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Work_Order_Order_By>>;
  where?: Maybe<Work_Order_Bool_Exp>;
};

/** aggregated selection of "notes" */
export type Notes_Aggregate = {
  __typename?: 'notes_aggregate';
  aggregate?: Maybe<Notes_Aggregate_Fields>;
  nodes: Array<Notes>;
};

/** aggregate fields of "notes" */
export type Notes_Aggregate_Fields = {
  __typename?: 'notes_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<Notes_Max_Fields>;
  min?: Maybe<Notes_Min_Fields>;
};


/** aggregate fields of "notes" */
export type Notes_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Notes_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** Boolean expression to filter rows from the table "notes". All fields are combined with a logical 'AND'. */
export type Notes_Bool_Exp = {
  _and?: Maybe<Array<Notes_Bool_Exp>>;
  _not?: Maybe<Notes_Bool_Exp>;
  _or?: Maybe<Array<Notes_Bool_Exp>>;
  content?: Maybe<String_Comparison_Exp>;
  created_at?: Maybe<Timestamptz_Comparison_Exp>;
  id?: Maybe<Uuid_Comparison_Exp>;
  title?: Maybe<String_Comparison_Exp>;
  updated_at?: Maybe<Timestamptz_Comparison_Exp>;
  user_id?: Maybe<Uuid_Comparison_Exp>;
  work_orders?: Maybe<Work_Order_Bool_Exp>;
};

/** unique or primary key constraints on table "notes" */
export enum Notes_Constraint {
  /** unique or primary key constraint */
  NotesPkey = 'notes_pkey'
}

/** input type for inserting data into table "notes" */
export type Notes_Insert_Input = {
  content?: Maybe<Scalars['String']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['uuid']>;
  title?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
  user_id?: Maybe<Scalars['uuid']>;
  work_orders?: Maybe<Work_Order_Arr_Rel_Insert_Input>;
};

/** aggregate max on columns */
export type Notes_Max_Fields = {
  __typename?: 'notes_max_fields';
  content?: Maybe<Scalars['String']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['uuid']>;
  title?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
  user_id?: Maybe<Scalars['uuid']>;
};

/** aggregate min on columns */
export type Notes_Min_Fields = {
  __typename?: 'notes_min_fields';
  content?: Maybe<Scalars['String']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['uuid']>;
  title?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
  user_id?: Maybe<Scalars['uuid']>;
};

/** response of any mutation on the table "notes" */
export type Notes_Mutation_Response = {
  __typename?: 'notes_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Notes>;
};

/** input type for inserting object relation for remote table "notes" */
export type Notes_Obj_Rel_Insert_Input = {
  data: Notes_Insert_Input;
  /** on conflict condition */
  on_conflict?: Maybe<Notes_On_Conflict>;
};

/** on conflict condition type for table "notes" */
export type Notes_On_Conflict = {
  constraint: Notes_Constraint;
  update_columns?: Array<Notes_Update_Column>;
  where?: Maybe<Notes_Bool_Exp>;
};

/** Ordering options when selecting data from "notes". */
export type Notes_Order_By = {
  content?: Maybe<Order_By>;
  created_at?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  title?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
  user_id?: Maybe<Order_By>;
  work_orders_aggregate?: Maybe<Work_Order_Aggregate_Order_By>;
};

/** primary key columns input for table: notes */
export type Notes_Pk_Columns_Input = {
  id: Scalars['uuid'];
};

/** select columns of table "notes" */
export enum Notes_Select_Column {
  /** column name */
  Content = 'content',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  Title = 'title',
  /** column name */
  UpdatedAt = 'updated_at',
  /** column name */
  UserId = 'user_id'
}

/** input type for updating data in table "notes" */
export type Notes_Set_Input = {
  content?: Maybe<Scalars['String']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['uuid']>;
  title?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
  user_id?: Maybe<Scalars['uuid']>;
};

/** update columns of table "notes" */
export enum Notes_Update_Column {
  /** column name */
  Content = 'content',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  Title = 'title',
  /** column name */
  UpdatedAt = 'updated_at',
  /** column name */
  UserId = 'user_id'
}

/** column ordering options */
export enum Order_By {
  /** in ascending order, nulls last */
  Asc = 'asc',
  /** in ascending order, nulls first */
  AscNullsFirst = 'asc_nulls_first',
  /** in ascending order, nulls last */
  AscNullsLast = 'asc_nulls_last',
  /** in descending order, nulls first */
  Desc = 'desc',
  /** in descending order, nulls first */
  DescNullsFirst = 'desc_nulls_first',
  /** in descending order, nulls last */
  DescNullsLast = 'desc_nulls_last'
}

/** columns and relationships of "order_details" */
export type Order_Details = {
  __typename?: 'order_details';
  discount: Scalars['Float'];
  /** An object relationship */
  order: Orders;
  order_id: Scalars['smallint'];
  /** An object relationship */
  product: Products;
  product_id: Scalars['smallint'];
  quantity: Scalars['smallint'];
  unit_price: Scalars['Float'];
};

/** aggregated selection of "order_details" */
export type Order_Details_Aggregate = {
  __typename?: 'order_details_aggregate';
  aggregate?: Maybe<Order_Details_Aggregate_Fields>;
  nodes: Array<Order_Details>;
};

/** aggregate fields of "order_details" */
export type Order_Details_Aggregate_Fields = {
  __typename?: 'order_details_aggregate_fields';
  avg?: Maybe<Order_Details_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Order_Details_Max_Fields>;
  min?: Maybe<Order_Details_Min_Fields>;
  stddev?: Maybe<Order_Details_Stddev_Fields>;
  stddev_pop?: Maybe<Order_Details_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Order_Details_Stddev_Samp_Fields>;
  sum?: Maybe<Order_Details_Sum_Fields>;
  var_pop?: Maybe<Order_Details_Var_Pop_Fields>;
  var_samp?: Maybe<Order_Details_Var_Samp_Fields>;
  variance?: Maybe<Order_Details_Variance_Fields>;
};


/** aggregate fields of "order_details" */
export type Order_Details_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Order_Details_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "order_details" */
export type Order_Details_Aggregate_Order_By = {
  avg?: Maybe<Order_Details_Avg_Order_By>;
  count?: Maybe<Order_By>;
  max?: Maybe<Order_Details_Max_Order_By>;
  min?: Maybe<Order_Details_Min_Order_By>;
  stddev?: Maybe<Order_Details_Stddev_Order_By>;
  stddev_pop?: Maybe<Order_Details_Stddev_Pop_Order_By>;
  stddev_samp?: Maybe<Order_Details_Stddev_Samp_Order_By>;
  sum?: Maybe<Order_Details_Sum_Order_By>;
  var_pop?: Maybe<Order_Details_Var_Pop_Order_By>;
  var_samp?: Maybe<Order_Details_Var_Samp_Order_By>;
  variance?: Maybe<Order_Details_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "order_details" */
export type Order_Details_Arr_Rel_Insert_Input = {
  data: Array<Order_Details_Insert_Input>;
  /** on conflict condition */
  on_conflict?: Maybe<Order_Details_On_Conflict>;
};

/** aggregate avg on columns */
export type Order_Details_Avg_Fields = {
  __typename?: 'order_details_avg_fields';
  discount?: Maybe<Scalars['Float']>;
  order_id?: Maybe<Scalars['Float']>;
  product_id?: Maybe<Scalars['Float']>;
  quantity?: Maybe<Scalars['Float']>;
  unit_price?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "order_details" */
export type Order_Details_Avg_Order_By = {
  discount?: Maybe<Order_By>;
  order_id?: Maybe<Order_By>;
  product_id?: Maybe<Order_By>;
  quantity?: Maybe<Order_By>;
  unit_price?: Maybe<Order_By>;
};

/** Boolean expression to filter rows from the table "order_details". All fields are combined with a logical 'AND'. */
export type Order_Details_Bool_Exp = {
  _and?: Maybe<Array<Order_Details_Bool_Exp>>;
  _not?: Maybe<Order_Details_Bool_Exp>;
  _or?: Maybe<Array<Order_Details_Bool_Exp>>;
  discount?: Maybe<Float_Comparison_Exp>;
  order?: Maybe<Orders_Bool_Exp>;
  order_id?: Maybe<Smallint_Comparison_Exp>;
  product?: Maybe<Products_Bool_Exp>;
  product_id?: Maybe<Smallint_Comparison_Exp>;
  quantity?: Maybe<Smallint_Comparison_Exp>;
  unit_price?: Maybe<Float_Comparison_Exp>;
};

/** unique or primary key constraints on table "order_details" */
export enum Order_Details_Constraint {
  /** unique or primary key constraint */
  PkOrderDetails = 'pk_order_details'
}

/** input type for incrementing numeric columns in table "order_details" */
export type Order_Details_Inc_Input = {
  discount?: Maybe<Scalars['Float']>;
  order_id?: Maybe<Scalars['smallint']>;
  product_id?: Maybe<Scalars['smallint']>;
  quantity?: Maybe<Scalars['smallint']>;
  unit_price?: Maybe<Scalars['Float']>;
};

/** input type for inserting data into table "order_details" */
export type Order_Details_Insert_Input = {
  discount?: Maybe<Scalars['Float']>;
  order?: Maybe<Orders_Obj_Rel_Insert_Input>;
  order_id?: Maybe<Scalars['smallint']>;
  product?: Maybe<Products_Obj_Rel_Insert_Input>;
  product_id?: Maybe<Scalars['smallint']>;
  quantity?: Maybe<Scalars['smallint']>;
  unit_price?: Maybe<Scalars['Float']>;
};

/** aggregate max on columns */
export type Order_Details_Max_Fields = {
  __typename?: 'order_details_max_fields';
  discount?: Maybe<Scalars['Float']>;
  order_id?: Maybe<Scalars['smallint']>;
  product_id?: Maybe<Scalars['smallint']>;
  quantity?: Maybe<Scalars['smallint']>;
  unit_price?: Maybe<Scalars['Float']>;
};

/** order by max() on columns of table "order_details" */
export type Order_Details_Max_Order_By = {
  discount?: Maybe<Order_By>;
  order_id?: Maybe<Order_By>;
  product_id?: Maybe<Order_By>;
  quantity?: Maybe<Order_By>;
  unit_price?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type Order_Details_Min_Fields = {
  __typename?: 'order_details_min_fields';
  discount?: Maybe<Scalars['Float']>;
  order_id?: Maybe<Scalars['smallint']>;
  product_id?: Maybe<Scalars['smallint']>;
  quantity?: Maybe<Scalars['smallint']>;
  unit_price?: Maybe<Scalars['Float']>;
};

/** order by min() on columns of table "order_details" */
export type Order_Details_Min_Order_By = {
  discount?: Maybe<Order_By>;
  order_id?: Maybe<Order_By>;
  product_id?: Maybe<Order_By>;
  quantity?: Maybe<Order_By>;
  unit_price?: Maybe<Order_By>;
};

/** response of any mutation on the table "order_details" */
export type Order_Details_Mutation_Response = {
  __typename?: 'order_details_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Order_Details>;
};

/** on conflict condition type for table "order_details" */
export type Order_Details_On_Conflict = {
  constraint: Order_Details_Constraint;
  update_columns?: Array<Order_Details_Update_Column>;
  where?: Maybe<Order_Details_Bool_Exp>;
};

/** Ordering options when selecting data from "order_details". */
export type Order_Details_Order_By = {
  discount?: Maybe<Order_By>;
  order?: Maybe<Orders_Order_By>;
  order_id?: Maybe<Order_By>;
  product?: Maybe<Products_Order_By>;
  product_id?: Maybe<Order_By>;
  quantity?: Maybe<Order_By>;
  unit_price?: Maybe<Order_By>;
};

/** primary key columns input for table: order_details */
export type Order_Details_Pk_Columns_Input = {
  order_id: Scalars['smallint'];
  product_id: Scalars['smallint'];
};

/** select columns of table "order_details" */
export enum Order_Details_Select_Column {
  /** column name */
  Discount = 'discount',
  /** column name */
  OrderId = 'order_id',
  /** column name */
  ProductId = 'product_id',
  /** column name */
  Quantity = 'quantity',
  /** column name */
  UnitPrice = 'unit_price'
}

/** input type for updating data in table "order_details" */
export type Order_Details_Set_Input = {
  discount?: Maybe<Scalars['Float']>;
  order_id?: Maybe<Scalars['smallint']>;
  product_id?: Maybe<Scalars['smallint']>;
  quantity?: Maybe<Scalars['smallint']>;
  unit_price?: Maybe<Scalars['Float']>;
};

/** aggregate stddev on columns */
export type Order_Details_Stddev_Fields = {
  __typename?: 'order_details_stddev_fields';
  discount?: Maybe<Scalars['Float']>;
  order_id?: Maybe<Scalars['Float']>;
  product_id?: Maybe<Scalars['Float']>;
  quantity?: Maybe<Scalars['Float']>;
  unit_price?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "order_details" */
export type Order_Details_Stddev_Order_By = {
  discount?: Maybe<Order_By>;
  order_id?: Maybe<Order_By>;
  product_id?: Maybe<Order_By>;
  quantity?: Maybe<Order_By>;
  unit_price?: Maybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Order_Details_Stddev_Pop_Fields = {
  __typename?: 'order_details_stddev_pop_fields';
  discount?: Maybe<Scalars['Float']>;
  order_id?: Maybe<Scalars['Float']>;
  product_id?: Maybe<Scalars['Float']>;
  quantity?: Maybe<Scalars['Float']>;
  unit_price?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "order_details" */
export type Order_Details_Stddev_Pop_Order_By = {
  discount?: Maybe<Order_By>;
  order_id?: Maybe<Order_By>;
  product_id?: Maybe<Order_By>;
  quantity?: Maybe<Order_By>;
  unit_price?: Maybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Order_Details_Stddev_Samp_Fields = {
  __typename?: 'order_details_stddev_samp_fields';
  discount?: Maybe<Scalars['Float']>;
  order_id?: Maybe<Scalars['Float']>;
  product_id?: Maybe<Scalars['Float']>;
  quantity?: Maybe<Scalars['Float']>;
  unit_price?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "order_details" */
export type Order_Details_Stddev_Samp_Order_By = {
  discount?: Maybe<Order_By>;
  order_id?: Maybe<Order_By>;
  product_id?: Maybe<Order_By>;
  quantity?: Maybe<Order_By>;
  unit_price?: Maybe<Order_By>;
};

/** aggregate sum on columns */
export type Order_Details_Sum_Fields = {
  __typename?: 'order_details_sum_fields';
  discount?: Maybe<Scalars['Float']>;
  order_id?: Maybe<Scalars['smallint']>;
  product_id?: Maybe<Scalars['smallint']>;
  quantity?: Maybe<Scalars['smallint']>;
  unit_price?: Maybe<Scalars['Float']>;
};

/** order by sum() on columns of table "order_details" */
export type Order_Details_Sum_Order_By = {
  discount?: Maybe<Order_By>;
  order_id?: Maybe<Order_By>;
  product_id?: Maybe<Order_By>;
  quantity?: Maybe<Order_By>;
  unit_price?: Maybe<Order_By>;
};

/** update columns of table "order_details" */
export enum Order_Details_Update_Column {
  /** column name */
  Discount = 'discount',
  /** column name */
  OrderId = 'order_id',
  /** column name */
  ProductId = 'product_id',
  /** column name */
  Quantity = 'quantity',
  /** column name */
  UnitPrice = 'unit_price'
}

/** aggregate var_pop on columns */
export type Order_Details_Var_Pop_Fields = {
  __typename?: 'order_details_var_pop_fields';
  discount?: Maybe<Scalars['Float']>;
  order_id?: Maybe<Scalars['Float']>;
  product_id?: Maybe<Scalars['Float']>;
  quantity?: Maybe<Scalars['Float']>;
  unit_price?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "order_details" */
export type Order_Details_Var_Pop_Order_By = {
  discount?: Maybe<Order_By>;
  order_id?: Maybe<Order_By>;
  product_id?: Maybe<Order_By>;
  quantity?: Maybe<Order_By>;
  unit_price?: Maybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Order_Details_Var_Samp_Fields = {
  __typename?: 'order_details_var_samp_fields';
  discount?: Maybe<Scalars['Float']>;
  order_id?: Maybe<Scalars['Float']>;
  product_id?: Maybe<Scalars['Float']>;
  quantity?: Maybe<Scalars['Float']>;
  unit_price?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "order_details" */
export type Order_Details_Var_Samp_Order_By = {
  discount?: Maybe<Order_By>;
  order_id?: Maybe<Order_By>;
  product_id?: Maybe<Order_By>;
  quantity?: Maybe<Order_By>;
  unit_price?: Maybe<Order_By>;
};

/** aggregate variance on columns */
export type Order_Details_Variance_Fields = {
  __typename?: 'order_details_variance_fields';
  discount?: Maybe<Scalars['Float']>;
  order_id?: Maybe<Scalars['Float']>;
  product_id?: Maybe<Scalars['Float']>;
  quantity?: Maybe<Scalars['Float']>;
  unit_price?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "order_details" */
export type Order_Details_Variance_Order_By = {
  discount?: Maybe<Order_By>;
  order_id?: Maybe<Order_By>;
  product_id?: Maybe<Order_By>;
  quantity?: Maybe<Order_By>;
  unit_price?: Maybe<Order_By>;
};

/** columns and relationships of "orders" */
export type Orders = {
  __typename?: 'orders';
  /** An object relationship */
  customer?: Maybe<Customers>;
  customer_id?: Maybe<Scalars['bpchar']>;
  /** An object relationship */
  employee?: Maybe<Employees>;
  employee_id?: Maybe<Scalars['smallint']>;
  freight?: Maybe<Scalars['Float']>;
  order_date?: Maybe<Scalars['date']>;
  /** An array relationship */
  order_details: Array<Order_Details>;
  /** An aggregate relationship */
  order_details_aggregate: Order_Details_Aggregate;
  order_id: Scalars['smallint'];
  required_date?: Maybe<Scalars['date']>;
  ship_address?: Maybe<Scalars['String']>;
  ship_city?: Maybe<Scalars['String']>;
  ship_country?: Maybe<Scalars['String']>;
  ship_name?: Maybe<Scalars['String']>;
  ship_postal_code?: Maybe<Scalars['String']>;
  ship_region?: Maybe<Scalars['String']>;
  ship_via?: Maybe<Scalars['smallint']>;
  shipped_date?: Maybe<Scalars['date']>;
  /** An object relationship */
  shipper?: Maybe<Shippers>;
};


/** columns and relationships of "orders" */
export type OrdersOrder_DetailsArgs = {
  distinct_on?: Maybe<Array<Order_Details_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Order_Details_Order_By>>;
  where?: Maybe<Order_Details_Bool_Exp>;
};


/** columns and relationships of "orders" */
export type OrdersOrder_Details_AggregateArgs = {
  distinct_on?: Maybe<Array<Order_Details_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Order_Details_Order_By>>;
  where?: Maybe<Order_Details_Bool_Exp>;
};

/** aggregated selection of "orders" */
export type Orders_Aggregate = {
  __typename?: 'orders_aggregate';
  aggregate?: Maybe<Orders_Aggregate_Fields>;
  nodes: Array<Orders>;
};

/** aggregate fields of "orders" */
export type Orders_Aggregate_Fields = {
  __typename?: 'orders_aggregate_fields';
  avg?: Maybe<Orders_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Orders_Max_Fields>;
  min?: Maybe<Orders_Min_Fields>;
  stddev?: Maybe<Orders_Stddev_Fields>;
  stddev_pop?: Maybe<Orders_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Orders_Stddev_Samp_Fields>;
  sum?: Maybe<Orders_Sum_Fields>;
  var_pop?: Maybe<Orders_Var_Pop_Fields>;
  var_samp?: Maybe<Orders_Var_Samp_Fields>;
  variance?: Maybe<Orders_Variance_Fields>;
};


/** aggregate fields of "orders" */
export type Orders_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Orders_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "orders" */
export type Orders_Aggregate_Order_By = {
  avg?: Maybe<Orders_Avg_Order_By>;
  count?: Maybe<Order_By>;
  max?: Maybe<Orders_Max_Order_By>;
  min?: Maybe<Orders_Min_Order_By>;
  stddev?: Maybe<Orders_Stddev_Order_By>;
  stddev_pop?: Maybe<Orders_Stddev_Pop_Order_By>;
  stddev_samp?: Maybe<Orders_Stddev_Samp_Order_By>;
  sum?: Maybe<Orders_Sum_Order_By>;
  var_pop?: Maybe<Orders_Var_Pop_Order_By>;
  var_samp?: Maybe<Orders_Var_Samp_Order_By>;
  variance?: Maybe<Orders_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "orders" */
export type Orders_Arr_Rel_Insert_Input = {
  data: Array<Orders_Insert_Input>;
  /** on conflict condition */
  on_conflict?: Maybe<Orders_On_Conflict>;
};

/** aggregate avg on columns */
export type Orders_Avg_Fields = {
  __typename?: 'orders_avg_fields';
  employee_id?: Maybe<Scalars['Float']>;
  freight?: Maybe<Scalars['Float']>;
  order_id?: Maybe<Scalars['Float']>;
  ship_via?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "orders" */
export type Orders_Avg_Order_By = {
  employee_id?: Maybe<Order_By>;
  freight?: Maybe<Order_By>;
  order_id?: Maybe<Order_By>;
  ship_via?: Maybe<Order_By>;
};

/** Boolean expression to filter rows from the table "orders". All fields are combined with a logical 'AND'. */
export type Orders_Bool_Exp = {
  _and?: Maybe<Array<Orders_Bool_Exp>>;
  _not?: Maybe<Orders_Bool_Exp>;
  _or?: Maybe<Array<Orders_Bool_Exp>>;
  customer?: Maybe<Customers_Bool_Exp>;
  customer_id?: Maybe<Bpchar_Comparison_Exp>;
  employee?: Maybe<Employees_Bool_Exp>;
  employee_id?: Maybe<Smallint_Comparison_Exp>;
  freight?: Maybe<Float_Comparison_Exp>;
  order_date?: Maybe<Date_Comparison_Exp>;
  order_details?: Maybe<Order_Details_Bool_Exp>;
  order_id?: Maybe<Smallint_Comparison_Exp>;
  required_date?: Maybe<Date_Comparison_Exp>;
  ship_address?: Maybe<String_Comparison_Exp>;
  ship_city?: Maybe<String_Comparison_Exp>;
  ship_country?: Maybe<String_Comparison_Exp>;
  ship_name?: Maybe<String_Comparison_Exp>;
  ship_postal_code?: Maybe<String_Comparison_Exp>;
  ship_region?: Maybe<String_Comparison_Exp>;
  ship_via?: Maybe<Smallint_Comparison_Exp>;
  shipped_date?: Maybe<Date_Comparison_Exp>;
  shipper?: Maybe<Shippers_Bool_Exp>;
};

/** unique or primary key constraints on table "orders" */
export enum Orders_Constraint {
  /** unique or primary key constraint */
  PkOrders = 'pk_orders'
}

/** input type for incrementing numeric columns in table "orders" */
export type Orders_Inc_Input = {
  employee_id?: Maybe<Scalars['smallint']>;
  freight?: Maybe<Scalars['Float']>;
  order_id?: Maybe<Scalars['smallint']>;
  ship_via?: Maybe<Scalars['smallint']>;
};

/** input type for inserting data into table "orders" */
export type Orders_Insert_Input = {
  customer?: Maybe<Customers_Obj_Rel_Insert_Input>;
  customer_id?: Maybe<Scalars['bpchar']>;
  employee?: Maybe<Employees_Obj_Rel_Insert_Input>;
  employee_id?: Maybe<Scalars['smallint']>;
  freight?: Maybe<Scalars['Float']>;
  order_date?: Maybe<Scalars['date']>;
  order_details?: Maybe<Order_Details_Arr_Rel_Insert_Input>;
  order_id?: Maybe<Scalars['smallint']>;
  required_date?: Maybe<Scalars['date']>;
  ship_address?: Maybe<Scalars['String']>;
  ship_city?: Maybe<Scalars['String']>;
  ship_country?: Maybe<Scalars['String']>;
  ship_name?: Maybe<Scalars['String']>;
  ship_postal_code?: Maybe<Scalars['String']>;
  ship_region?: Maybe<Scalars['String']>;
  ship_via?: Maybe<Scalars['smallint']>;
  shipped_date?: Maybe<Scalars['date']>;
  shipper?: Maybe<Shippers_Obj_Rel_Insert_Input>;
};

/** aggregate max on columns */
export type Orders_Max_Fields = {
  __typename?: 'orders_max_fields';
  customer_id?: Maybe<Scalars['bpchar']>;
  employee_id?: Maybe<Scalars['smallint']>;
  freight?: Maybe<Scalars['Float']>;
  order_date?: Maybe<Scalars['date']>;
  order_id?: Maybe<Scalars['smallint']>;
  required_date?: Maybe<Scalars['date']>;
  ship_address?: Maybe<Scalars['String']>;
  ship_city?: Maybe<Scalars['String']>;
  ship_country?: Maybe<Scalars['String']>;
  ship_name?: Maybe<Scalars['String']>;
  ship_postal_code?: Maybe<Scalars['String']>;
  ship_region?: Maybe<Scalars['String']>;
  ship_via?: Maybe<Scalars['smallint']>;
  shipped_date?: Maybe<Scalars['date']>;
};

/** order by max() on columns of table "orders" */
export type Orders_Max_Order_By = {
  customer_id?: Maybe<Order_By>;
  employee_id?: Maybe<Order_By>;
  freight?: Maybe<Order_By>;
  order_date?: Maybe<Order_By>;
  order_id?: Maybe<Order_By>;
  required_date?: Maybe<Order_By>;
  ship_address?: Maybe<Order_By>;
  ship_city?: Maybe<Order_By>;
  ship_country?: Maybe<Order_By>;
  ship_name?: Maybe<Order_By>;
  ship_postal_code?: Maybe<Order_By>;
  ship_region?: Maybe<Order_By>;
  ship_via?: Maybe<Order_By>;
  shipped_date?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type Orders_Min_Fields = {
  __typename?: 'orders_min_fields';
  customer_id?: Maybe<Scalars['bpchar']>;
  employee_id?: Maybe<Scalars['smallint']>;
  freight?: Maybe<Scalars['Float']>;
  order_date?: Maybe<Scalars['date']>;
  order_id?: Maybe<Scalars['smallint']>;
  required_date?: Maybe<Scalars['date']>;
  ship_address?: Maybe<Scalars['String']>;
  ship_city?: Maybe<Scalars['String']>;
  ship_country?: Maybe<Scalars['String']>;
  ship_name?: Maybe<Scalars['String']>;
  ship_postal_code?: Maybe<Scalars['String']>;
  ship_region?: Maybe<Scalars['String']>;
  ship_via?: Maybe<Scalars['smallint']>;
  shipped_date?: Maybe<Scalars['date']>;
};

/** order by min() on columns of table "orders" */
export type Orders_Min_Order_By = {
  customer_id?: Maybe<Order_By>;
  employee_id?: Maybe<Order_By>;
  freight?: Maybe<Order_By>;
  order_date?: Maybe<Order_By>;
  order_id?: Maybe<Order_By>;
  required_date?: Maybe<Order_By>;
  ship_address?: Maybe<Order_By>;
  ship_city?: Maybe<Order_By>;
  ship_country?: Maybe<Order_By>;
  ship_name?: Maybe<Order_By>;
  ship_postal_code?: Maybe<Order_By>;
  ship_region?: Maybe<Order_By>;
  ship_via?: Maybe<Order_By>;
  shipped_date?: Maybe<Order_By>;
};

/** response of any mutation on the table "orders" */
export type Orders_Mutation_Response = {
  __typename?: 'orders_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Orders>;
};

/** input type for inserting object relation for remote table "orders" */
export type Orders_Obj_Rel_Insert_Input = {
  data: Orders_Insert_Input;
  /** on conflict condition */
  on_conflict?: Maybe<Orders_On_Conflict>;
};

/** on conflict condition type for table "orders" */
export type Orders_On_Conflict = {
  constraint: Orders_Constraint;
  update_columns?: Array<Orders_Update_Column>;
  where?: Maybe<Orders_Bool_Exp>;
};

/** Ordering options when selecting data from "orders". */
export type Orders_Order_By = {
  customer?: Maybe<Customers_Order_By>;
  customer_id?: Maybe<Order_By>;
  employee?: Maybe<Employees_Order_By>;
  employee_id?: Maybe<Order_By>;
  freight?: Maybe<Order_By>;
  order_date?: Maybe<Order_By>;
  order_details_aggregate?: Maybe<Order_Details_Aggregate_Order_By>;
  order_id?: Maybe<Order_By>;
  required_date?: Maybe<Order_By>;
  ship_address?: Maybe<Order_By>;
  ship_city?: Maybe<Order_By>;
  ship_country?: Maybe<Order_By>;
  ship_name?: Maybe<Order_By>;
  ship_postal_code?: Maybe<Order_By>;
  ship_region?: Maybe<Order_By>;
  ship_via?: Maybe<Order_By>;
  shipped_date?: Maybe<Order_By>;
  shipper?: Maybe<Shippers_Order_By>;
};

/** primary key columns input for table: orders */
export type Orders_Pk_Columns_Input = {
  order_id: Scalars['smallint'];
};

/** select columns of table "orders" */
export enum Orders_Select_Column {
  /** column name */
  CustomerId = 'customer_id',
  /** column name */
  EmployeeId = 'employee_id',
  /** column name */
  Freight = 'freight',
  /** column name */
  OrderDate = 'order_date',
  /** column name */
  OrderId = 'order_id',
  /** column name */
  RequiredDate = 'required_date',
  /** column name */
  ShipAddress = 'ship_address',
  /** column name */
  ShipCity = 'ship_city',
  /** column name */
  ShipCountry = 'ship_country',
  /** column name */
  ShipName = 'ship_name',
  /** column name */
  ShipPostalCode = 'ship_postal_code',
  /** column name */
  ShipRegion = 'ship_region',
  /** column name */
  ShipVia = 'ship_via',
  /** column name */
  ShippedDate = 'shipped_date'
}

/** input type for updating data in table "orders" */
export type Orders_Set_Input = {
  customer_id?: Maybe<Scalars['bpchar']>;
  employee_id?: Maybe<Scalars['smallint']>;
  freight?: Maybe<Scalars['Float']>;
  order_date?: Maybe<Scalars['date']>;
  order_id?: Maybe<Scalars['smallint']>;
  required_date?: Maybe<Scalars['date']>;
  ship_address?: Maybe<Scalars['String']>;
  ship_city?: Maybe<Scalars['String']>;
  ship_country?: Maybe<Scalars['String']>;
  ship_name?: Maybe<Scalars['String']>;
  ship_postal_code?: Maybe<Scalars['String']>;
  ship_region?: Maybe<Scalars['String']>;
  ship_via?: Maybe<Scalars['smallint']>;
  shipped_date?: Maybe<Scalars['date']>;
};

/** aggregate stddev on columns */
export type Orders_Stddev_Fields = {
  __typename?: 'orders_stddev_fields';
  employee_id?: Maybe<Scalars['Float']>;
  freight?: Maybe<Scalars['Float']>;
  order_id?: Maybe<Scalars['Float']>;
  ship_via?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "orders" */
export type Orders_Stddev_Order_By = {
  employee_id?: Maybe<Order_By>;
  freight?: Maybe<Order_By>;
  order_id?: Maybe<Order_By>;
  ship_via?: Maybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Orders_Stddev_Pop_Fields = {
  __typename?: 'orders_stddev_pop_fields';
  employee_id?: Maybe<Scalars['Float']>;
  freight?: Maybe<Scalars['Float']>;
  order_id?: Maybe<Scalars['Float']>;
  ship_via?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "orders" */
export type Orders_Stddev_Pop_Order_By = {
  employee_id?: Maybe<Order_By>;
  freight?: Maybe<Order_By>;
  order_id?: Maybe<Order_By>;
  ship_via?: Maybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Orders_Stddev_Samp_Fields = {
  __typename?: 'orders_stddev_samp_fields';
  employee_id?: Maybe<Scalars['Float']>;
  freight?: Maybe<Scalars['Float']>;
  order_id?: Maybe<Scalars['Float']>;
  ship_via?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "orders" */
export type Orders_Stddev_Samp_Order_By = {
  employee_id?: Maybe<Order_By>;
  freight?: Maybe<Order_By>;
  order_id?: Maybe<Order_By>;
  ship_via?: Maybe<Order_By>;
};

/** aggregate sum on columns */
export type Orders_Sum_Fields = {
  __typename?: 'orders_sum_fields';
  employee_id?: Maybe<Scalars['smallint']>;
  freight?: Maybe<Scalars['Float']>;
  order_id?: Maybe<Scalars['smallint']>;
  ship_via?: Maybe<Scalars['smallint']>;
};

/** order by sum() on columns of table "orders" */
export type Orders_Sum_Order_By = {
  employee_id?: Maybe<Order_By>;
  freight?: Maybe<Order_By>;
  order_id?: Maybe<Order_By>;
  ship_via?: Maybe<Order_By>;
};

/** update columns of table "orders" */
export enum Orders_Update_Column {
  /** column name */
  CustomerId = 'customer_id',
  /** column name */
  EmployeeId = 'employee_id',
  /** column name */
  Freight = 'freight',
  /** column name */
  OrderDate = 'order_date',
  /** column name */
  OrderId = 'order_id',
  /** column name */
  RequiredDate = 'required_date',
  /** column name */
  ShipAddress = 'ship_address',
  /** column name */
  ShipCity = 'ship_city',
  /** column name */
  ShipCountry = 'ship_country',
  /** column name */
  ShipName = 'ship_name',
  /** column name */
  ShipPostalCode = 'ship_postal_code',
  /** column name */
  ShipRegion = 'ship_region',
  /** column name */
  ShipVia = 'ship_via',
  /** column name */
  ShippedDate = 'shipped_date'
}

/** aggregate var_pop on columns */
export type Orders_Var_Pop_Fields = {
  __typename?: 'orders_var_pop_fields';
  employee_id?: Maybe<Scalars['Float']>;
  freight?: Maybe<Scalars['Float']>;
  order_id?: Maybe<Scalars['Float']>;
  ship_via?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "orders" */
export type Orders_Var_Pop_Order_By = {
  employee_id?: Maybe<Order_By>;
  freight?: Maybe<Order_By>;
  order_id?: Maybe<Order_By>;
  ship_via?: Maybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Orders_Var_Samp_Fields = {
  __typename?: 'orders_var_samp_fields';
  employee_id?: Maybe<Scalars['Float']>;
  freight?: Maybe<Scalars['Float']>;
  order_id?: Maybe<Scalars['Float']>;
  ship_via?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "orders" */
export type Orders_Var_Samp_Order_By = {
  employee_id?: Maybe<Order_By>;
  freight?: Maybe<Order_By>;
  order_id?: Maybe<Order_By>;
  ship_via?: Maybe<Order_By>;
};

/** aggregate variance on columns */
export type Orders_Variance_Fields = {
  __typename?: 'orders_variance_fields';
  employee_id?: Maybe<Scalars['Float']>;
  freight?: Maybe<Scalars['Float']>;
  order_id?: Maybe<Scalars['Float']>;
  ship_via?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "orders" */
export type Orders_Variance_Order_By = {
  employee_id?: Maybe<Order_By>;
  freight?: Maybe<Order_By>;
  order_id?: Maybe<Order_By>;
  ship_via?: Maybe<Order_By>;
};

/** columns and relationships of "products" */
export type Products = {
  __typename?: 'products';
  /** An object relationship */
  category?: Maybe<Categories>;
  category_id?: Maybe<Scalars['smallint']>;
  discontinued: Scalars['Int'];
  /** An array relationship */
  order_details: Array<Order_Details>;
  /** An aggregate relationship */
  order_details_aggregate: Order_Details_Aggregate;
  product_id: Scalars['smallint'];
  product_name: Scalars['String'];
  quantity_per_unit?: Maybe<Scalars['String']>;
  reorder_level?: Maybe<Scalars['smallint']>;
  /** An object relationship */
  supplier?: Maybe<Suppliers>;
  supplier_id?: Maybe<Scalars['smallint']>;
  unit_price?: Maybe<Scalars['Float']>;
  units_in_stock?: Maybe<Scalars['smallint']>;
  units_on_order?: Maybe<Scalars['smallint']>;
};


/** columns and relationships of "products" */
export type ProductsOrder_DetailsArgs = {
  distinct_on?: Maybe<Array<Order_Details_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Order_Details_Order_By>>;
  where?: Maybe<Order_Details_Bool_Exp>;
};


/** columns and relationships of "products" */
export type ProductsOrder_Details_AggregateArgs = {
  distinct_on?: Maybe<Array<Order_Details_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Order_Details_Order_By>>;
  where?: Maybe<Order_Details_Bool_Exp>;
};

/** aggregated selection of "products" */
export type Products_Aggregate = {
  __typename?: 'products_aggregate';
  aggregate?: Maybe<Products_Aggregate_Fields>;
  nodes: Array<Products>;
};

/** aggregate fields of "products" */
export type Products_Aggregate_Fields = {
  __typename?: 'products_aggregate_fields';
  avg?: Maybe<Products_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Products_Max_Fields>;
  min?: Maybe<Products_Min_Fields>;
  stddev?: Maybe<Products_Stddev_Fields>;
  stddev_pop?: Maybe<Products_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Products_Stddev_Samp_Fields>;
  sum?: Maybe<Products_Sum_Fields>;
  var_pop?: Maybe<Products_Var_Pop_Fields>;
  var_samp?: Maybe<Products_Var_Samp_Fields>;
  variance?: Maybe<Products_Variance_Fields>;
};


/** aggregate fields of "products" */
export type Products_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Products_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "products" */
export type Products_Aggregate_Order_By = {
  avg?: Maybe<Products_Avg_Order_By>;
  count?: Maybe<Order_By>;
  max?: Maybe<Products_Max_Order_By>;
  min?: Maybe<Products_Min_Order_By>;
  stddev?: Maybe<Products_Stddev_Order_By>;
  stddev_pop?: Maybe<Products_Stddev_Pop_Order_By>;
  stddev_samp?: Maybe<Products_Stddev_Samp_Order_By>;
  sum?: Maybe<Products_Sum_Order_By>;
  var_pop?: Maybe<Products_Var_Pop_Order_By>;
  var_samp?: Maybe<Products_Var_Samp_Order_By>;
  variance?: Maybe<Products_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "products" */
export type Products_Arr_Rel_Insert_Input = {
  data: Array<Products_Insert_Input>;
  /** on conflict condition */
  on_conflict?: Maybe<Products_On_Conflict>;
};

/** aggregate avg on columns */
export type Products_Avg_Fields = {
  __typename?: 'products_avg_fields';
  category_id?: Maybe<Scalars['Float']>;
  discontinued?: Maybe<Scalars['Float']>;
  product_id?: Maybe<Scalars['Float']>;
  reorder_level?: Maybe<Scalars['Float']>;
  supplier_id?: Maybe<Scalars['Float']>;
  unit_price?: Maybe<Scalars['Float']>;
  units_in_stock?: Maybe<Scalars['Float']>;
  units_on_order?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "products" */
export type Products_Avg_Order_By = {
  category_id?: Maybe<Order_By>;
  discontinued?: Maybe<Order_By>;
  product_id?: Maybe<Order_By>;
  reorder_level?: Maybe<Order_By>;
  supplier_id?: Maybe<Order_By>;
  unit_price?: Maybe<Order_By>;
  units_in_stock?: Maybe<Order_By>;
  units_on_order?: Maybe<Order_By>;
};

/** Boolean expression to filter rows from the table "products". All fields are combined with a logical 'AND'. */
export type Products_Bool_Exp = {
  _and?: Maybe<Array<Products_Bool_Exp>>;
  _not?: Maybe<Products_Bool_Exp>;
  _or?: Maybe<Array<Products_Bool_Exp>>;
  category?: Maybe<Categories_Bool_Exp>;
  category_id?: Maybe<Smallint_Comparison_Exp>;
  discontinued?: Maybe<Int_Comparison_Exp>;
  order_details?: Maybe<Order_Details_Bool_Exp>;
  product_id?: Maybe<Smallint_Comparison_Exp>;
  product_name?: Maybe<String_Comparison_Exp>;
  quantity_per_unit?: Maybe<String_Comparison_Exp>;
  reorder_level?: Maybe<Smallint_Comparison_Exp>;
  supplier?: Maybe<Suppliers_Bool_Exp>;
  supplier_id?: Maybe<Smallint_Comparison_Exp>;
  unit_price?: Maybe<Float_Comparison_Exp>;
  units_in_stock?: Maybe<Smallint_Comparison_Exp>;
  units_on_order?: Maybe<Smallint_Comparison_Exp>;
};

/** unique or primary key constraints on table "products" */
export enum Products_Constraint {
  /** unique or primary key constraint */
  PkProducts = 'pk_products'
}

/** input type for incrementing numeric columns in table "products" */
export type Products_Inc_Input = {
  category_id?: Maybe<Scalars['smallint']>;
  discontinued?: Maybe<Scalars['Int']>;
  product_id?: Maybe<Scalars['smallint']>;
  reorder_level?: Maybe<Scalars['smallint']>;
  supplier_id?: Maybe<Scalars['smallint']>;
  unit_price?: Maybe<Scalars['Float']>;
  units_in_stock?: Maybe<Scalars['smallint']>;
  units_on_order?: Maybe<Scalars['smallint']>;
};

/** input type for inserting data into table "products" */
export type Products_Insert_Input = {
  category?: Maybe<Categories_Obj_Rel_Insert_Input>;
  category_id?: Maybe<Scalars['smallint']>;
  discontinued?: Maybe<Scalars['Int']>;
  order_details?: Maybe<Order_Details_Arr_Rel_Insert_Input>;
  product_id?: Maybe<Scalars['smallint']>;
  product_name?: Maybe<Scalars['String']>;
  quantity_per_unit?: Maybe<Scalars['String']>;
  reorder_level?: Maybe<Scalars['smallint']>;
  supplier?: Maybe<Suppliers_Obj_Rel_Insert_Input>;
  supplier_id?: Maybe<Scalars['smallint']>;
  unit_price?: Maybe<Scalars['Float']>;
  units_in_stock?: Maybe<Scalars['smallint']>;
  units_on_order?: Maybe<Scalars['smallint']>;
};

/** aggregate max on columns */
export type Products_Max_Fields = {
  __typename?: 'products_max_fields';
  category_id?: Maybe<Scalars['smallint']>;
  discontinued?: Maybe<Scalars['Int']>;
  product_id?: Maybe<Scalars['smallint']>;
  product_name?: Maybe<Scalars['String']>;
  quantity_per_unit?: Maybe<Scalars['String']>;
  reorder_level?: Maybe<Scalars['smallint']>;
  supplier_id?: Maybe<Scalars['smallint']>;
  unit_price?: Maybe<Scalars['Float']>;
  units_in_stock?: Maybe<Scalars['smallint']>;
  units_on_order?: Maybe<Scalars['smallint']>;
};

/** order by max() on columns of table "products" */
export type Products_Max_Order_By = {
  category_id?: Maybe<Order_By>;
  discontinued?: Maybe<Order_By>;
  product_id?: Maybe<Order_By>;
  product_name?: Maybe<Order_By>;
  quantity_per_unit?: Maybe<Order_By>;
  reorder_level?: Maybe<Order_By>;
  supplier_id?: Maybe<Order_By>;
  unit_price?: Maybe<Order_By>;
  units_in_stock?: Maybe<Order_By>;
  units_on_order?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type Products_Min_Fields = {
  __typename?: 'products_min_fields';
  category_id?: Maybe<Scalars['smallint']>;
  discontinued?: Maybe<Scalars['Int']>;
  product_id?: Maybe<Scalars['smallint']>;
  product_name?: Maybe<Scalars['String']>;
  quantity_per_unit?: Maybe<Scalars['String']>;
  reorder_level?: Maybe<Scalars['smallint']>;
  supplier_id?: Maybe<Scalars['smallint']>;
  unit_price?: Maybe<Scalars['Float']>;
  units_in_stock?: Maybe<Scalars['smallint']>;
  units_on_order?: Maybe<Scalars['smallint']>;
};

/** order by min() on columns of table "products" */
export type Products_Min_Order_By = {
  category_id?: Maybe<Order_By>;
  discontinued?: Maybe<Order_By>;
  product_id?: Maybe<Order_By>;
  product_name?: Maybe<Order_By>;
  quantity_per_unit?: Maybe<Order_By>;
  reorder_level?: Maybe<Order_By>;
  supplier_id?: Maybe<Order_By>;
  unit_price?: Maybe<Order_By>;
  units_in_stock?: Maybe<Order_By>;
  units_on_order?: Maybe<Order_By>;
};

/** response of any mutation on the table "products" */
export type Products_Mutation_Response = {
  __typename?: 'products_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Products>;
};

/** input type for inserting object relation for remote table "products" */
export type Products_Obj_Rel_Insert_Input = {
  data: Products_Insert_Input;
  /** on conflict condition */
  on_conflict?: Maybe<Products_On_Conflict>;
};

/** on conflict condition type for table "products" */
export type Products_On_Conflict = {
  constraint: Products_Constraint;
  update_columns?: Array<Products_Update_Column>;
  where?: Maybe<Products_Bool_Exp>;
};

/** Ordering options when selecting data from "products". */
export type Products_Order_By = {
  category?: Maybe<Categories_Order_By>;
  category_id?: Maybe<Order_By>;
  discontinued?: Maybe<Order_By>;
  order_details_aggregate?: Maybe<Order_Details_Aggregate_Order_By>;
  product_id?: Maybe<Order_By>;
  product_name?: Maybe<Order_By>;
  quantity_per_unit?: Maybe<Order_By>;
  reorder_level?: Maybe<Order_By>;
  supplier?: Maybe<Suppliers_Order_By>;
  supplier_id?: Maybe<Order_By>;
  unit_price?: Maybe<Order_By>;
  units_in_stock?: Maybe<Order_By>;
  units_on_order?: Maybe<Order_By>;
};

/** primary key columns input for table: products */
export type Products_Pk_Columns_Input = {
  product_id: Scalars['smallint'];
};

/** select columns of table "products" */
export enum Products_Select_Column {
  /** column name */
  CategoryId = 'category_id',
  /** column name */
  Discontinued = 'discontinued',
  /** column name */
  ProductId = 'product_id',
  /** column name */
  ProductName = 'product_name',
  /** column name */
  QuantityPerUnit = 'quantity_per_unit',
  /** column name */
  ReorderLevel = 'reorder_level',
  /** column name */
  SupplierId = 'supplier_id',
  /** column name */
  UnitPrice = 'unit_price',
  /** column name */
  UnitsInStock = 'units_in_stock',
  /** column name */
  UnitsOnOrder = 'units_on_order'
}

/** input type for updating data in table "products" */
export type Products_Set_Input = {
  category_id?: Maybe<Scalars['smallint']>;
  discontinued?: Maybe<Scalars['Int']>;
  product_id?: Maybe<Scalars['smallint']>;
  product_name?: Maybe<Scalars['String']>;
  quantity_per_unit?: Maybe<Scalars['String']>;
  reorder_level?: Maybe<Scalars['smallint']>;
  supplier_id?: Maybe<Scalars['smallint']>;
  unit_price?: Maybe<Scalars['Float']>;
  units_in_stock?: Maybe<Scalars['smallint']>;
  units_on_order?: Maybe<Scalars['smallint']>;
};

/** aggregate stddev on columns */
export type Products_Stddev_Fields = {
  __typename?: 'products_stddev_fields';
  category_id?: Maybe<Scalars['Float']>;
  discontinued?: Maybe<Scalars['Float']>;
  product_id?: Maybe<Scalars['Float']>;
  reorder_level?: Maybe<Scalars['Float']>;
  supplier_id?: Maybe<Scalars['Float']>;
  unit_price?: Maybe<Scalars['Float']>;
  units_in_stock?: Maybe<Scalars['Float']>;
  units_on_order?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "products" */
export type Products_Stddev_Order_By = {
  category_id?: Maybe<Order_By>;
  discontinued?: Maybe<Order_By>;
  product_id?: Maybe<Order_By>;
  reorder_level?: Maybe<Order_By>;
  supplier_id?: Maybe<Order_By>;
  unit_price?: Maybe<Order_By>;
  units_in_stock?: Maybe<Order_By>;
  units_on_order?: Maybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Products_Stddev_Pop_Fields = {
  __typename?: 'products_stddev_pop_fields';
  category_id?: Maybe<Scalars['Float']>;
  discontinued?: Maybe<Scalars['Float']>;
  product_id?: Maybe<Scalars['Float']>;
  reorder_level?: Maybe<Scalars['Float']>;
  supplier_id?: Maybe<Scalars['Float']>;
  unit_price?: Maybe<Scalars['Float']>;
  units_in_stock?: Maybe<Scalars['Float']>;
  units_on_order?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "products" */
export type Products_Stddev_Pop_Order_By = {
  category_id?: Maybe<Order_By>;
  discontinued?: Maybe<Order_By>;
  product_id?: Maybe<Order_By>;
  reorder_level?: Maybe<Order_By>;
  supplier_id?: Maybe<Order_By>;
  unit_price?: Maybe<Order_By>;
  units_in_stock?: Maybe<Order_By>;
  units_on_order?: Maybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Products_Stddev_Samp_Fields = {
  __typename?: 'products_stddev_samp_fields';
  category_id?: Maybe<Scalars['Float']>;
  discontinued?: Maybe<Scalars['Float']>;
  product_id?: Maybe<Scalars['Float']>;
  reorder_level?: Maybe<Scalars['Float']>;
  supplier_id?: Maybe<Scalars['Float']>;
  unit_price?: Maybe<Scalars['Float']>;
  units_in_stock?: Maybe<Scalars['Float']>;
  units_on_order?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "products" */
export type Products_Stddev_Samp_Order_By = {
  category_id?: Maybe<Order_By>;
  discontinued?: Maybe<Order_By>;
  product_id?: Maybe<Order_By>;
  reorder_level?: Maybe<Order_By>;
  supplier_id?: Maybe<Order_By>;
  unit_price?: Maybe<Order_By>;
  units_in_stock?: Maybe<Order_By>;
  units_on_order?: Maybe<Order_By>;
};

/** aggregate sum on columns */
export type Products_Sum_Fields = {
  __typename?: 'products_sum_fields';
  category_id?: Maybe<Scalars['smallint']>;
  discontinued?: Maybe<Scalars['Int']>;
  product_id?: Maybe<Scalars['smallint']>;
  reorder_level?: Maybe<Scalars['smallint']>;
  supplier_id?: Maybe<Scalars['smallint']>;
  unit_price?: Maybe<Scalars['Float']>;
  units_in_stock?: Maybe<Scalars['smallint']>;
  units_on_order?: Maybe<Scalars['smallint']>;
};

/** order by sum() on columns of table "products" */
export type Products_Sum_Order_By = {
  category_id?: Maybe<Order_By>;
  discontinued?: Maybe<Order_By>;
  product_id?: Maybe<Order_By>;
  reorder_level?: Maybe<Order_By>;
  supplier_id?: Maybe<Order_By>;
  unit_price?: Maybe<Order_By>;
  units_in_stock?: Maybe<Order_By>;
  units_on_order?: Maybe<Order_By>;
};

/** update columns of table "products" */
export enum Products_Update_Column {
  /** column name */
  CategoryId = 'category_id',
  /** column name */
  Discontinued = 'discontinued',
  /** column name */
  ProductId = 'product_id',
  /** column name */
  ProductName = 'product_name',
  /** column name */
  QuantityPerUnit = 'quantity_per_unit',
  /** column name */
  ReorderLevel = 'reorder_level',
  /** column name */
  SupplierId = 'supplier_id',
  /** column name */
  UnitPrice = 'unit_price',
  /** column name */
  UnitsInStock = 'units_in_stock',
  /** column name */
  UnitsOnOrder = 'units_on_order'
}

/** aggregate var_pop on columns */
export type Products_Var_Pop_Fields = {
  __typename?: 'products_var_pop_fields';
  category_id?: Maybe<Scalars['Float']>;
  discontinued?: Maybe<Scalars['Float']>;
  product_id?: Maybe<Scalars['Float']>;
  reorder_level?: Maybe<Scalars['Float']>;
  supplier_id?: Maybe<Scalars['Float']>;
  unit_price?: Maybe<Scalars['Float']>;
  units_in_stock?: Maybe<Scalars['Float']>;
  units_on_order?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "products" */
export type Products_Var_Pop_Order_By = {
  category_id?: Maybe<Order_By>;
  discontinued?: Maybe<Order_By>;
  product_id?: Maybe<Order_By>;
  reorder_level?: Maybe<Order_By>;
  supplier_id?: Maybe<Order_By>;
  unit_price?: Maybe<Order_By>;
  units_in_stock?: Maybe<Order_By>;
  units_on_order?: Maybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Products_Var_Samp_Fields = {
  __typename?: 'products_var_samp_fields';
  category_id?: Maybe<Scalars['Float']>;
  discontinued?: Maybe<Scalars['Float']>;
  product_id?: Maybe<Scalars['Float']>;
  reorder_level?: Maybe<Scalars['Float']>;
  supplier_id?: Maybe<Scalars['Float']>;
  unit_price?: Maybe<Scalars['Float']>;
  units_in_stock?: Maybe<Scalars['Float']>;
  units_on_order?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "products" */
export type Products_Var_Samp_Order_By = {
  category_id?: Maybe<Order_By>;
  discontinued?: Maybe<Order_By>;
  product_id?: Maybe<Order_By>;
  reorder_level?: Maybe<Order_By>;
  supplier_id?: Maybe<Order_By>;
  unit_price?: Maybe<Order_By>;
  units_in_stock?: Maybe<Order_By>;
  units_on_order?: Maybe<Order_By>;
};

/** aggregate variance on columns */
export type Products_Variance_Fields = {
  __typename?: 'products_variance_fields';
  category_id?: Maybe<Scalars['Float']>;
  discontinued?: Maybe<Scalars['Float']>;
  product_id?: Maybe<Scalars['Float']>;
  reorder_level?: Maybe<Scalars['Float']>;
  supplier_id?: Maybe<Scalars['Float']>;
  unit_price?: Maybe<Scalars['Float']>;
  units_in_stock?: Maybe<Scalars['Float']>;
  units_on_order?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "products" */
export type Products_Variance_Order_By = {
  category_id?: Maybe<Order_By>;
  discontinued?: Maybe<Order_By>;
  product_id?: Maybe<Order_By>;
  reorder_level?: Maybe<Order_By>;
  supplier_id?: Maybe<Order_By>;
  unit_price?: Maybe<Order_By>;
  units_in_stock?: Maybe<Order_By>;
  units_on_order?: Maybe<Order_By>;
};

export type Query_Root = {
  __typename?: 'query_root';
  /** fetch data from the table: "address" */
  address: Array<Address>;
  /** fetch aggregated fields from the table: "address" */
  address_aggregate: Address_Aggregate;
  /** fetch data from the table: "address" using primary key columns */
  address_by_pk?: Maybe<Address>;
  /** fetch data from the table: "categories" */
  categories: Array<Categories>;
  /** fetch aggregated fields from the table: "categories" */
  categories_aggregate: Categories_Aggregate;
  /** fetch data from the table: "categories" using primary key columns */
  categories_by_pk?: Maybe<Categories>;
  /** fetch data from the table: "customer_customer_demo" */
  customer_customer_demo: Array<Customer_Customer_Demo>;
  /** fetch aggregated fields from the table: "customer_customer_demo" */
  customer_customer_demo_aggregate: Customer_Customer_Demo_Aggregate;
  /** fetch data from the table: "customer_customer_demo" using primary key columns */
  customer_customer_demo_by_pk?: Maybe<Customer_Customer_Demo>;
  /** fetch data from the table: "customer_demographics" */
  customer_demographics: Array<Customer_Demographics>;
  /** fetch aggregated fields from the table: "customer_demographics" */
  customer_demographics_aggregate: Customer_Demographics_Aggregate;
  /** fetch data from the table: "customer_demographics" using primary key columns */
  customer_demographics_by_pk?: Maybe<Customer_Demographics>;
  /** fetch data from the table: "customers" */
  customers: Array<Customers>;
  /** fetch aggregated fields from the table: "customers" */
  customers_aggregate: Customers_Aggregate;
  /** fetch data from the table: "customers" using primary key columns */
  customers_by_pk?: Maybe<Customers>;
  /** An array relationship */
  employee_territories: Array<Employee_Territories>;
  /** An aggregate relationship */
  employee_territories_aggregate: Employee_Territories_Aggregate;
  /** fetch data from the table: "employee_territories" using primary key columns */
  employee_territories_by_pk?: Maybe<Employee_Territories>;
  /** An array relationship */
  employees: Array<Employees>;
  /** An aggregate relationship */
  employees_aggregate: Employees_Aggregate;
  /** fetch data from the table: "employees" using primary key columns */
  employees_by_pk?: Maybe<Employees>;
  /** fetch data from the table: "images" */
  images: Array<Images>;
  /** fetch aggregated fields from the table: "images" */
  images_aggregate: Images_Aggregate;
  /** fetch data from the table: "images" using primary key columns */
  images_by_pk?: Maybe<Images>;
  /** fetch data from the table: "master.canned_response" */
  master_canned_response: Array<Master_Canned_Response>;
  /** fetch aggregated fields from the table: "master.canned_response" */
  master_canned_response_aggregate: Master_Canned_Response_Aggregate;
  /** fetch data from the table: "master.canned_response" using primary key columns */
  master_canned_response_by_pk?: Maybe<Master_Canned_Response>;
  /** fetch data from the table: "master.city" */
  master_city: Array<Master_City>;
  /** fetch aggregated fields from the table: "master.city" */
  master_city_aggregate: Master_City_Aggregate;
  /** fetch data from the table: "master.city" using primary key columns */
  master_city_by_pk?: Maybe<Master_City>;
  /** fetch data from the table: "master.country" */
  master_country: Array<Master_Country>;
  /** fetch aggregated fields from the table: "master.country" */
  master_country_aggregate: Master_Country_Aggregate;
  /** fetch data from the table: "master.country" using primary key columns */
  master_country_by_pk?: Maybe<Master_Country>;
  /** fetch data from the table: "master.customers" */
  master_customers: Array<Master_Customers>;
  /** fetch aggregated fields from the table: "master.customers" */
  master_customers_aggregate: Master_Customers_Aggregate;
  /** fetch data from the table: "master.customers" using primary key columns */
  master_customers_by_pk?: Maybe<Master_Customers>;
  /** fetch data from the table: "master.state" */
  master_state: Array<Master_State>;
  /** fetch aggregated fields from the table: "master.state" */
  master_state_aggregate: Master_State_Aggregate;
  /** fetch data from the table: "master.state" using primary key columns */
  master_state_by_pk?: Maybe<Master_State>;
  /** fetch data from the table: "master.status" */
  master_status: Array<Master_Status>;
  /** fetch aggregated fields from the table: "master.status" */
  master_status_aggregate: Master_Status_Aggregate;
  /** fetch data from the table: "master.status" using primary key columns */
  master_status_by_pk?: Maybe<Master_Status>;
  /** fetch data from the table: "master.users" */
  master_users: Array<Master_Users>;
  /** fetch aggregated fields from the table: "master.users" */
  master_users_aggregate: Master_Users_Aggregate;
  /** fetch data from the table: "master.users" using primary key columns */
  master_users_by_pk?: Maybe<Master_Users>;
  /** fetch data from the table: "master.work_category" */
  master_work_category: Array<Master_Work_Category>;
  /** fetch aggregated fields from the table: "master.work_category" */
  master_work_category_aggregate: Master_Work_Category_Aggregate;
  /** fetch data from the table: "master.work_category" using primary key columns */
  master_work_category_by_pk?: Maybe<Master_Work_Category>;
  /** fetch data from the table: "notes" */
  notes: Array<Notes>;
  /** fetch aggregated fields from the table: "notes" */
  notes_aggregate: Notes_Aggregate;
  /** fetch data from the table: "notes" using primary key columns */
  notes_by_pk?: Maybe<Notes>;
  /** An array relationship */
  order_details: Array<Order_Details>;
  /** An aggregate relationship */
  order_details_aggregate: Order_Details_Aggregate;
  /** fetch data from the table: "order_details" using primary key columns */
  order_details_by_pk?: Maybe<Order_Details>;
  /** fetch data from the table: "orders" */
  orders: Array<Orders>;
  /** An aggregate relationship */
  orders_aggregate: Orders_Aggregate;
  /** fetch data from the table: "orders" using primary key columns */
  orders_by_pk?: Maybe<Orders>;
  /** An array relationship */
  products: Array<Products>;
  /** An aggregate relationship */
  products_aggregate: Products_Aggregate;
  /** fetch data from the table: "products" using primary key columns */
  products_by_pk?: Maybe<Products>;
  /** fetch data from the table: "region" */
  region: Array<Region>;
  /** fetch aggregated fields from the table: "region" */
  region_aggregate: Region_Aggregate;
  /** fetch data from the table: "region" using primary key columns */
  region_by_pk?: Maybe<Region>;
  /** fetch data from the table: "shippers" */
  shippers: Array<Shippers>;
  /** fetch aggregated fields from the table: "shippers" */
  shippers_aggregate: Shippers_Aggregate;
  /** fetch data from the table: "shippers" using primary key columns */
  shippers_by_pk?: Maybe<Shippers>;
  /** fetch data from the table: "suppliers" */
  suppliers: Array<Suppliers>;
  /** fetch aggregated fields from the table: "suppliers" */
  suppliers_aggregate: Suppliers_Aggregate;
  /** fetch data from the table: "suppliers" using primary key columns */
  suppliers_by_pk?: Maybe<Suppliers>;
  /** An array relationship */
  territories: Array<Territories>;
  /** An aggregate relationship */
  territories_aggregate: Territories_Aggregate;
  /** fetch data from the table: "territories" using primary key columns */
  territories_by_pk?: Maybe<Territories>;
  /** fetch data from the table: "us_states" */
  us_states: Array<Us_States>;
  /** fetch aggregated fields from the table: "us_states" */
  us_states_aggregate: Us_States_Aggregate;
  /** fetch data from the table: "us_states" using primary key columns */
  us_states_by_pk?: Maybe<Us_States>;
  /** fetch data from the table: "work_order" */
  work_order: Array<Work_Order>;
  /** fetch aggregated fields from the table: "work_order" */
  work_order_aggregate: Work_Order_Aggregate;
  /** fetch data from the table: "work_order" using primary key columns */
  work_order_by_pk?: Maybe<Work_Order>;
};


export type Query_RootAddressArgs = {
  distinct_on?: Maybe<Array<Address_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Address_Order_By>>;
  where?: Maybe<Address_Bool_Exp>;
};


export type Query_RootAddress_AggregateArgs = {
  distinct_on?: Maybe<Array<Address_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Address_Order_By>>;
  where?: Maybe<Address_Bool_Exp>;
};


export type Query_RootAddress_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Query_RootCategoriesArgs = {
  distinct_on?: Maybe<Array<Categories_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Categories_Order_By>>;
  where?: Maybe<Categories_Bool_Exp>;
};


export type Query_RootCategories_AggregateArgs = {
  distinct_on?: Maybe<Array<Categories_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Categories_Order_By>>;
  where?: Maybe<Categories_Bool_Exp>;
};


export type Query_RootCategories_By_PkArgs = {
  category_id: Scalars['smallint'];
};


export type Query_RootCustomer_Customer_DemoArgs = {
  distinct_on?: Maybe<Array<Customer_Customer_Demo_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Customer_Customer_Demo_Order_By>>;
  where?: Maybe<Customer_Customer_Demo_Bool_Exp>;
};


export type Query_RootCustomer_Customer_Demo_AggregateArgs = {
  distinct_on?: Maybe<Array<Customer_Customer_Demo_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Customer_Customer_Demo_Order_By>>;
  where?: Maybe<Customer_Customer_Demo_Bool_Exp>;
};


export type Query_RootCustomer_Customer_Demo_By_PkArgs = {
  customer_id: Scalars['bpchar'];
  customer_type_id: Scalars['bpchar'];
};


export type Query_RootCustomer_DemographicsArgs = {
  distinct_on?: Maybe<Array<Customer_Demographics_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Customer_Demographics_Order_By>>;
  where?: Maybe<Customer_Demographics_Bool_Exp>;
};


export type Query_RootCustomer_Demographics_AggregateArgs = {
  distinct_on?: Maybe<Array<Customer_Demographics_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Customer_Demographics_Order_By>>;
  where?: Maybe<Customer_Demographics_Bool_Exp>;
};


export type Query_RootCustomer_Demographics_By_PkArgs = {
  customer_type_id: Scalars['bpchar'];
};


export type Query_RootCustomersArgs = {
  distinct_on?: Maybe<Array<Customers_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Customers_Order_By>>;
  where?: Maybe<Customers_Bool_Exp>;
};


export type Query_RootCustomers_AggregateArgs = {
  distinct_on?: Maybe<Array<Customers_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Customers_Order_By>>;
  where?: Maybe<Customers_Bool_Exp>;
};


export type Query_RootCustomers_By_PkArgs = {
  customer_id: Scalars['bpchar'];
};


export type Query_RootEmployee_TerritoriesArgs = {
  distinct_on?: Maybe<Array<Employee_Territories_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Employee_Territories_Order_By>>;
  where?: Maybe<Employee_Territories_Bool_Exp>;
};


export type Query_RootEmployee_Territories_AggregateArgs = {
  distinct_on?: Maybe<Array<Employee_Territories_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Employee_Territories_Order_By>>;
  where?: Maybe<Employee_Territories_Bool_Exp>;
};


export type Query_RootEmployee_Territories_By_PkArgs = {
  employee_id: Scalars['smallint'];
  territory_id: Scalars['String'];
};


export type Query_RootEmployeesArgs = {
  distinct_on?: Maybe<Array<Employees_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Employees_Order_By>>;
  where?: Maybe<Employees_Bool_Exp>;
};


export type Query_RootEmployees_AggregateArgs = {
  distinct_on?: Maybe<Array<Employees_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Employees_Order_By>>;
  where?: Maybe<Employees_Bool_Exp>;
};


export type Query_RootEmployees_By_PkArgs = {
  employee_id: Scalars['smallint'];
};


export type Query_RootImagesArgs = {
  distinct_on?: Maybe<Array<Images_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Images_Order_By>>;
  where?: Maybe<Images_Bool_Exp>;
};


export type Query_RootImages_AggregateArgs = {
  distinct_on?: Maybe<Array<Images_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Images_Order_By>>;
  where?: Maybe<Images_Bool_Exp>;
};


export type Query_RootImages_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Query_RootMaster_Canned_ResponseArgs = {
  distinct_on?: Maybe<Array<Master_Canned_Response_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Master_Canned_Response_Order_By>>;
  where?: Maybe<Master_Canned_Response_Bool_Exp>;
};


export type Query_RootMaster_Canned_Response_AggregateArgs = {
  distinct_on?: Maybe<Array<Master_Canned_Response_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Master_Canned_Response_Order_By>>;
  where?: Maybe<Master_Canned_Response_Bool_Exp>;
};


export type Query_RootMaster_Canned_Response_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Query_RootMaster_CityArgs = {
  distinct_on?: Maybe<Array<Master_City_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Master_City_Order_By>>;
  where?: Maybe<Master_City_Bool_Exp>;
};


export type Query_RootMaster_City_AggregateArgs = {
  distinct_on?: Maybe<Array<Master_City_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Master_City_Order_By>>;
  where?: Maybe<Master_City_Bool_Exp>;
};


export type Query_RootMaster_City_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Query_RootMaster_CountryArgs = {
  distinct_on?: Maybe<Array<Master_Country_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Master_Country_Order_By>>;
  where?: Maybe<Master_Country_Bool_Exp>;
};


export type Query_RootMaster_Country_AggregateArgs = {
  distinct_on?: Maybe<Array<Master_Country_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Master_Country_Order_By>>;
  where?: Maybe<Master_Country_Bool_Exp>;
};


export type Query_RootMaster_Country_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Query_RootMaster_CustomersArgs = {
  distinct_on?: Maybe<Array<Master_Customers_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Master_Customers_Order_By>>;
  where?: Maybe<Master_Customers_Bool_Exp>;
};


export type Query_RootMaster_Customers_AggregateArgs = {
  distinct_on?: Maybe<Array<Master_Customers_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Master_Customers_Order_By>>;
  where?: Maybe<Master_Customers_Bool_Exp>;
};


export type Query_RootMaster_Customers_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Query_RootMaster_StateArgs = {
  distinct_on?: Maybe<Array<Master_State_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Master_State_Order_By>>;
  where?: Maybe<Master_State_Bool_Exp>;
};


export type Query_RootMaster_State_AggregateArgs = {
  distinct_on?: Maybe<Array<Master_State_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Master_State_Order_By>>;
  where?: Maybe<Master_State_Bool_Exp>;
};


export type Query_RootMaster_State_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Query_RootMaster_StatusArgs = {
  distinct_on?: Maybe<Array<Master_Status_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Master_Status_Order_By>>;
  where?: Maybe<Master_Status_Bool_Exp>;
};


export type Query_RootMaster_Status_AggregateArgs = {
  distinct_on?: Maybe<Array<Master_Status_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Master_Status_Order_By>>;
  where?: Maybe<Master_Status_Bool_Exp>;
};


export type Query_RootMaster_Status_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Query_RootMaster_UsersArgs = {
  distinct_on?: Maybe<Array<Master_Users_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Master_Users_Order_By>>;
  where?: Maybe<Master_Users_Bool_Exp>;
};


export type Query_RootMaster_Users_AggregateArgs = {
  distinct_on?: Maybe<Array<Master_Users_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Master_Users_Order_By>>;
  where?: Maybe<Master_Users_Bool_Exp>;
};


export type Query_RootMaster_Users_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Query_RootMaster_Work_CategoryArgs = {
  distinct_on?: Maybe<Array<Master_Work_Category_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Master_Work_Category_Order_By>>;
  where?: Maybe<Master_Work_Category_Bool_Exp>;
};


export type Query_RootMaster_Work_Category_AggregateArgs = {
  distinct_on?: Maybe<Array<Master_Work_Category_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Master_Work_Category_Order_By>>;
  where?: Maybe<Master_Work_Category_Bool_Exp>;
};


export type Query_RootMaster_Work_Category_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Query_RootNotesArgs = {
  distinct_on?: Maybe<Array<Notes_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Notes_Order_By>>;
  where?: Maybe<Notes_Bool_Exp>;
};


export type Query_RootNotes_AggregateArgs = {
  distinct_on?: Maybe<Array<Notes_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Notes_Order_By>>;
  where?: Maybe<Notes_Bool_Exp>;
};


export type Query_RootNotes_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Query_RootOrder_DetailsArgs = {
  distinct_on?: Maybe<Array<Order_Details_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Order_Details_Order_By>>;
  where?: Maybe<Order_Details_Bool_Exp>;
};


export type Query_RootOrder_Details_AggregateArgs = {
  distinct_on?: Maybe<Array<Order_Details_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Order_Details_Order_By>>;
  where?: Maybe<Order_Details_Bool_Exp>;
};


export type Query_RootOrder_Details_By_PkArgs = {
  order_id: Scalars['smallint'];
  product_id: Scalars['smallint'];
};


export type Query_RootOrdersArgs = {
  distinct_on?: Maybe<Array<Orders_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Orders_Order_By>>;
  where?: Maybe<Orders_Bool_Exp>;
};


export type Query_RootOrders_AggregateArgs = {
  distinct_on?: Maybe<Array<Orders_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Orders_Order_By>>;
  where?: Maybe<Orders_Bool_Exp>;
};


export type Query_RootOrders_By_PkArgs = {
  order_id: Scalars['smallint'];
};


export type Query_RootProductsArgs = {
  distinct_on?: Maybe<Array<Products_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Products_Order_By>>;
  where?: Maybe<Products_Bool_Exp>;
};


export type Query_RootProducts_AggregateArgs = {
  distinct_on?: Maybe<Array<Products_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Products_Order_By>>;
  where?: Maybe<Products_Bool_Exp>;
};


export type Query_RootProducts_By_PkArgs = {
  product_id: Scalars['smallint'];
};


export type Query_RootRegionArgs = {
  distinct_on?: Maybe<Array<Region_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Region_Order_By>>;
  where?: Maybe<Region_Bool_Exp>;
};


export type Query_RootRegion_AggregateArgs = {
  distinct_on?: Maybe<Array<Region_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Region_Order_By>>;
  where?: Maybe<Region_Bool_Exp>;
};


export type Query_RootRegion_By_PkArgs = {
  region_id: Scalars['smallint'];
};


export type Query_RootShippersArgs = {
  distinct_on?: Maybe<Array<Shippers_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Shippers_Order_By>>;
  where?: Maybe<Shippers_Bool_Exp>;
};


export type Query_RootShippers_AggregateArgs = {
  distinct_on?: Maybe<Array<Shippers_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Shippers_Order_By>>;
  where?: Maybe<Shippers_Bool_Exp>;
};


export type Query_RootShippers_By_PkArgs = {
  shipper_id: Scalars['smallint'];
};


export type Query_RootSuppliersArgs = {
  distinct_on?: Maybe<Array<Suppliers_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Suppliers_Order_By>>;
  where?: Maybe<Suppliers_Bool_Exp>;
};


export type Query_RootSuppliers_AggregateArgs = {
  distinct_on?: Maybe<Array<Suppliers_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Suppliers_Order_By>>;
  where?: Maybe<Suppliers_Bool_Exp>;
};


export type Query_RootSuppliers_By_PkArgs = {
  supplier_id: Scalars['smallint'];
};


export type Query_RootTerritoriesArgs = {
  distinct_on?: Maybe<Array<Territories_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Territories_Order_By>>;
  where?: Maybe<Territories_Bool_Exp>;
};


export type Query_RootTerritories_AggregateArgs = {
  distinct_on?: Maybe<Array<Territories_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Territories_Order_By>>;
  where?: Maybe<Territories_Bool_Exp>;
};


export type Query_RootTerritories_By_PkArgs = {
  territory_id: Scalars['String'];
};


export type Query_RootUs_StatesArgs = {
  distinct_on?: Maybe<Array<Us_States_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Us_States_Order_By>>;
  where?: Maybe<Us_States_Bool_Exp>;
};


export type Query_RootUs_States_AggregateArgs = {
  distinct_on?: Maybe<Array<Us_States_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Us_States_Order_By>>;
  where?: Maybe<Us_States_Bool_Exp>;
};


export type Query_RootUs_States_By_PkArgs = {
  state_id: Scalars['smallint'];
};


export type Query_RootWork_OrderArgs = {
  distinct_on?: Maybe<Array<Work_Order_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Work_Order_Order_By>>;
  where?: Maybe<Work_Order_Bool_Exp>;
};


export type Query_RootWork_Order_AggregateArgs = {
  distinct_on?: Maybe<Array<Work_Order_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Work_Order_Order_By>>;
  where?: Maybe<Work_Order_Bool_Exp>;
};


export type Query_RootWork_Order_By_PkArgs = {
  id: Scalars['uuid'];
};

/** columns and relationships of "region" */
export type Region = {
  __typename?: 'region';
  region_description: Scalars['bpchar'];
  region_id: Scalars['smallint'];
  /** An array relationship */
  territories: Array<Territories>;
  /** An aggregate relationship */
  territories_aggregate: Territories_Aggregate;
};


/** columns and relationships of "region" */
export type RegionTerritoriesArgs = {
  distinct_on?: Maybe<Array<Territories_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Territories_Order_By>>;
  where?: Maybe<Territories_Bool_Exp>;
};


/** columns and relationships of "region" */
export type RegionTerritories_AggregateArgs = {
  distinct_on?: Maybe<Array<Territories_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Territories_Order_By>>;
  where?: Maybe<Territories_Bool_Exp>;
};

/** aggregated selection of "region" */
export type Region_Aggregate = {
  __typename?: 'region_aggregate';
  aggregate?: Maybe<Region_Aggregate_Fields>;
  nodes: Array<Region>;
};

/** aggregate fields of "region" */
export type Region_Aggregate_Fields = {
  __typename?: 'region_aggregate_fields';
  avg?: Maybe<Region_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Region_Max_Fields>;
  min?: Maybe<Region_Min_Fields>;
  stddev?: Maybe<Region_Stddev_Fields>;
  stddev_pop?: Maybe<Region_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Region_Stddev_Samp_Fields>;
  sum?: Maybe<Region_Sum_Fields>;
  var_pop?: Maybe<Region_Var_Pop_Fields>;
  var_samp?: Maybe<Region_Var_Samp_Fields>;
  variance?: Maybe<Region_Variance_Fields>;
};


/** aggregate fields of "region" */
export type Region_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Region_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** aggregate avg on columns */
export type Region_Avg_Fields = {
  __typename?: 'region_avg_fields';
  region_id?: Maybe<Scalars['Float']>;
};

/** Boolean expression to filter rows from the table "region". All fields are combined with a logical 'AND'. */
export type Region_Bool_Exp = {
  _and?: Maybe<Array<Region_Bool_Exp>>;
  _not?: Maybe<Region_Bool_Exp>;
  _or?: Maybe<Array<Region_Bool_Exp>>;
  region_description?: Maybe<Bpchar_Comparison_Exp>;
  region_id?: Maybe<Smallint_Comparison_Exp>;
  territories?: Maybe<Territories_Bool_Exp>;
};

/** unique or primary key constraints on table "region" */
export enum Region_Constraint {
  /** unique or primary key constraint */
  PkRegion = 'pk_region'
}

/** input type for incrementing numeric columns in table "region" */
export type Region_Inc_Input = {
  region_id?: Maybe<Scalars['smallint']>;
};

/** input type for inserting data into table "region" */
export type Region_Insert_Input = {
  region_description?: Maybe<Scalars['bpchar']>;
  region_id?: Maybe<Scalars['smallint']>;
  territories?: Maybe<Territories_Arr_Rel_Insert_Input>;
};

/** aggregate max on columns */
export type Region_Max_Fields = {
  __typename?: 'region_max_fields';
  region_description?: Maybe<Scalars['bpchar']>;
  region_id?: Maybe<Scalars['smallint']>;
};

/** aggregate min on columns */
export type Region_Min_Fields = {
  __typename?: 'region_min_fields';
  region_description?: Maybe<Scalars['bpchar']>;
  region_id?: Maybe<Scalars['smallint']>;
};

/** response of any mutation on the table "region" */
export type Region_Mutation_Response = {
  __typename?: 'region_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Region>;
};

/** input type for inserting object relation for remote table "region" */
export type Region_Obj_Rel_Insert_Input = {
  data: Region_Insert_Input;
  /** on conflict condition */
  on_conflict?: Maybe<Region_On_Conflict>;
};

/** on conflict condition type for table "region" */
export type Region_On_Conflict = {
  constraint: Region_Constraint;
  update_columns?: Array<Region_Update_Column>;
  where?: Maybe<Region_Bool_Exp>;
};

/** Ordering options when selecting data from "region". */
export type Region_Order_By = {
  region_description?: Maybe<Order_By>;
  region_id?: Maybe<Order_By>;
  territories_aggregate?: Maybe<Territories_Aggregate_Order_By>;
};

/** primary key columns input for table: region */
export type Region_Pk_Columns_Input = {
  region_id: Scalars['smallint'];
};

/** select columns of table "region" */
export enum Region_Select_Column {
  /** column name */
  RegionDescription = 'region_description',
  /** column name */
  RegionId = 'region_id'
}

/** input type for updating data in table "region" */
export type Region_Set_Input = {
  region_description?: Maybe<Scalars['bpchar']>;
  region_id?: Maybe<Scalars['smallint']>;
};

/** aggregate stddev on columns */
export type Region_Stddev_Fields = {
  __typename?: 'region_stddev_fields';
  region_id?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_pop on columns */
export type Region_Stddev_Pop_Fields = {
  __typename?: 'region_stddev_pop_fields';
  region_id?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_samp on columns */
export type Region_Stddev_Samp_Fields = {
  __typename?: 'region_stddev_samp_fields';
  region_id?: Maybe<Scalars['Float']>;
};

/** aggregate sum on columns */
export type Region_Sum_Fields = {
  __typename?: 'region_sum_fields';
  region_id?: Maybe<Scalars['smallint']>;
};

/** update columns of table "region" */
export enum Region_Update_Column {
  /** column name */
  RegionDescription = 'region_description',
  /** column name */
  RegionId = 'region_id'
}

/** aggregate var_pop on columns */
export type Region_Var_Pop_Fields = {
  __typename?: 'region_var_pop_fields';
  region_id?: Maybe<Scalars['Float']>;
};

/** aggregate var_samp on columns */
export type Region_Var_Samp_Fields = {
  __typename?: 'region_var_samp_fields';
  region_id?: Maybe<Scalars['Float']>;
};

/** aggregate variance on columns */
export type Region_Variance_Fields = {
  __typename?: 'region_variance_fields';
  region_id?: Maybe<Scalars['Float']>;
};

/** columns and relationships of "shippers" */
export type Shippers = {
  __typename?: 'shippers';
  company_name: Scalars['String'];
  /** fetch data from the table: "orders" */
  orders: Array<Orders>;
  /** An aggregate relationship */
  orders_aggregate: Orders_Aggregate;
  phone?: Maybe<Scalars['String']>;
  shipper_id: Scalars['smallint'];
};


/** columns and relationships of "shippers" */
export type ShippersOrdersArgs = {
  distinct_on?: Maybe<Array<Orders_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Orders_Order_By>>;
  where?: Maybe<Orders_Bool_Exp>;
};


/** columns and relationships of "shippers" */
export type ShippersOrders_AggregateArgs = {
  distinct_on?: Maybe<Array<Orders_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Orders_Order_By>>;
  where?: Maybe<Orders_Bool_Exp>;
};

/** aggregated selection of "shippers" */
export type Shippers_Aggregate = {
  __typename?: 'shippers_aggregate';
  aggregate?: Maybe<Shippers_Aggregate_Fields>;
  nodes: Array<Shippers>;
};

/** aggregate fields of "shippers" */
export type Shippers_Aggregate_Fields = {
  __typename?: 'shippers_aggregate_fields';
  avg?: Maybe<Shippers_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Shippers_Max_Fields>;
  min?: Maybe<Shippers_Min_Fields>;
  stddev?: Maybe<Shippers_Stddev_Fields>;
  stddev_pop?: Maybe<Shippers_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Shippers_Stddev_Samp_Fields>;
  sum?: Maybe<Shippers_Sum_Fields>;
  var_pop?: Maybe<Shippers_Var_Pop_Fields>;
  var_samp?: Maybe<Shippers_Var_Samp_Fields>;
  variance?: Maybe<Shippers_Variance_Fields>;
};


/** aggregate fields of "shippers" */
export type Shippers_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Shippers_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** aggregate avg on columns */
export type Shippers_Avg_Fields = {
  __typename?: 'shippers_avg_fields';
  shipper_id?: Maybe<Scalars['Float']>;
};

/** Boolean expression to filter rows from the table "shippers". All fields are combined with a logical 'AND'. */
export type Shippers_Bool_Exp = {
  _and?: Maybe<Array<Shippers_Bool_Exp>>;
  _not?: Maybe<Shippers_Bool_Exp>;
  _or?: Maybe<Array<Shippers_Bool_Exp>>;
  company_name?: Maybe<String_Comparison_Exp>;
  orders?: Maybe<Orders_Bool_Exp>;
  phone?: Maybe<String_Comparison_Exp>;
  shipper_id?: Maybe<Smallint_Comparison_Exp>;
};

/** unique or primary key constraints on table "shippers" */
export enum Shippers_Constraint {
  /** unique or primary key constraint */
  PkShippers = 'pk_shippers'
}

/** input type for incrementing numeric columns in table "shippers" */
export type Shippers_Inc_Input = {
  shipper_id?: Maybe<Scalars['smallint']>;
};

/** input type for inserting data into table "shippers" */
export type Shippers_Insert_Input = {
  company_name?: Maybe<Scalars['String']>;
  orders?: Maybe<Orders_Arr_Rel_Insert_Input>;
  phone?: Maybe<Scalars['String']>;
  shipper_id?: Maybe<Scalars['smallint']>;
};

/** aggregate max on columns */
export type Shippers_Max_Fields = {
  __typename?: 'shippers_max_fields';
  company_name?: Maybe<Scalars['String']>;
  phone?: Maybe<Scalars['String']>;
  shipper_id?: Maybe<Scalars['smallint']>;
};

/** aggregate min on columns */
export type Shippers_Min_Fields = {
  __typename?: 'shippers_min_fields';
  company_name?: Maybe<Scalars['String']>;
  phone?: Maybe<Scalars['String']>;
  shipper_id?: Maybe<Scalars['smallint']>;
};

/** response of any mutation on the table "shippers" */
export type Shippers_Mutation_Response = {
  __typename?: 'shippers_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Shippers>;
};

/** input type for inserting object relation for remote table "shippers" */
export type Shippers_Obj_Rel_Insert_Input = {
  data: Shippers_Insert_Input;
  /** on conflict condition */
  on_conflict?: Maybe<Shippers_On_Conflict>;
};

/** on conflict condition type for table "shippers" */
export type Shippers_On_Conflict = {
  constraint: Shippers_Constraint;
  update_columns?: Array<Shippers_Update_Column>;
  where?: Maybe<Shippers_Bool_Exp>;
};

/** Ordering options when selecting data from "shippers". */
export type Shippers_Order_By = {
  company_name?: Maybe<Order_By>;
  orders_aggregate?: Maybe<Orders_Aggregate_Order_By>;
  phone?: Maybe<Order_By>;
  shipper_id?: Maybe<Order_By>;
};

/** primary key columns input for table: shippers */
export type Shippers_Pk_Columns_Input = {
  shipper_id: Scalars['smallint'];
};

/** select columns of table "shippers" */
export enum Shippers_Select_Column {
  /** column name */
  CompanyName = 'company_name',
  /** column name */
  Phone = 'phone',
  /** column name */
  ShipperId = 'shipper_id'
}

/** input type for updating data in table "shippers" */
export type Shippers_Set_Input = {
  company_name?: Maybe<Scalars['String']>;
  phone?: Maybe<Scalars['String']>;
  shipper_id?: Maybe<Scalars['smallint']>;
};

/** aggregate stddev on columns */
export type Shippers_Stddev_Fields = {
  __typename?: 'shippers_stddev_fields';
  shipper_id?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_pop on columns */
export type Shippers_Stddev_Pop_Fields = {
  __typename?: 'shippers_stddev_pop_fields';
  shipper_id?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_samp on columns */
export type Shippers_Stddev_Samp_Fields = {
  __typename?: 'shippers_stddev_samp_fields';
  shipper_id?: Maybe<Scalars['Float']>;
};

/** aggregate sum on columns */
export type Shippers_Sum_Fields = {
  __typename?: 'shippers_sum_fields';
  shipper_id?: Maybe<Scalars['smallint']>;
};

/** update columns of table "shippers" */
export enum Shippers_Update_Column {
  /** column name */
  CompanyName = 'company_name',
  /** column name */
  Phone = 'phone',
  /** column name */
  ShipperId = 'shipper_id'
}

/** aggregate var_pop on columns */
export type Shippers_Var_Pop_Fields = {
  __typename?: 'shippers_var_pop_fields';
  shipper_id?: Maybe<Scalars['Float']>;
};

/** aggregate var_samp on columns */
export type Shippers_Var_Samp_Fields = {
  __typename?: 'shippers_var_samp_fields';
  shipper_id?: Maybe<Scalars['Float']>;
};

/** aggregate variance on columns */
export type Shippers_Variance_Fields = {
  __typename?: 'shippers_variance_fields';
  shipper_id?: Maybe<Scalars['Float']>;
};


/** Boolean expression to compare columns of type "smallint". All fields are combined with logical 'AND'. */
export type Smallint_Comparison_Exp = {
  _eq?: Maybe<Scalars['smallint']>;
  _gt?: Maybe<Scalars['smallint']>;
  _gte?: Maybe<Scalars['smallint']>;
  _in?: Maybe<Array<Scalars['smallint']>>;
  _is_null?: Maybe<Scalars['Boolean']>;
  _lt?: Maybe<Scalars['smallint']>;
  _lte?: Maybe<Scalars['smallint']>;
  _neq?: Maybe<Scalars['smallint']>;
  _nin?: Maybe<Array<Scalars['smallint']>>;
};

export type Subscription_Root = {
  __typename?: 'subscription_root';
  /** fetch data from the table: "address" */
  address: Array<Address>;
  /** fetch aggregated fields from the table: "address" */
  address_aggregate: Address_Aggregate;
  /** fetch data from the table: "address" using primary key columns */
  address_by_pk?: Maybe<Address>;
  /** fetch data from the table: "categories" */
  categories: Array<Categories>;
  /** fetch aggregated fields from the table: "categories" */
  categories_aggregate: Categories_Aggregate;
  /** fetch data from the table: "categories" using primary key columns */
  categories_by_pk?: Maybe<Categories>;
  /** fetch data from the table: "customer_customer_demo" */
  customer_customer_demo: Array<Customer_Customer_Demo>;
  /** fetch aggregated fields from the table: "customer_customer_demo" */
  customer_customer_demo_aggregate: Customer_Customer_Demo_Aggregate;
  /** fetch data from the table: "customer_customer_demo" using primary key columns */
  customer_customer_demo_by_pk?: Maybe<Customer_Customer_Demo>;
  /** fetch data from the table: "customer_demographics" */
  customer_demographics: Array<Customer_Demographics>;
  /** fetch aggregated fields from the table: "customer_demographics" */
  customer_demographics_aggregate: Customer_Demographics_Aggregate;
  /** fetch data from the table: "customer_demographics" using primary key columns */
  customer_demographics_by_pk?: Maybe<Customer_Demographics>;
  /** fetch data from the table: "customers" */
  customers: Array<Customers>;
  /** fetch aggregated fields from the table: "customers" */
  customers_aggregate: Customers_Aggregate;
  /** fetch data from the table: "customers" using primary key columns */
  customers_by_pk?: Maybe<Customers>;
  /** An array relationship */
  employee_territories: Array<Employee_Territories>;
  /** An aggregate relationship */
  employee_territories_aggregate: Employee_Territories_Aggregate;
  /** fetch data from the table: "employee_territories" using primary key columns */
  employee_territories_by_pk?: Maybe<Employee_Territories>;
  /** An array relationship */
  employees: Array<Employees>;
  /** An aggregate relationship */
  employees_aggregate: Employees_Aggregate;
  /** fetch data from the table: "employees" using primary key columns */
  employees_by_pk?: Maybe<Employees>;
  /** fetch data from the table: "images" */
  images: Array<Images>;
  /** fetch aggregated fields from the table: "images" */
  images_aggregate: Images_Aggregate;
  /** fetch data from the table: "images" using primary key columns */
  images_by_pk?: Maybe<Images>;
  /** fetch data from the table: "master.canned_response" */
  master_canned_response: Array<Master_Canned_Response>;
  /** fetch aggregated fields from the table: "master.canned_response" */
  master_canned_response_aggregate: Master_Canned_Response_Aggregate;
  /** fetch data from the table: "master.canned_response" using primary key columns */
  master_canned_response_by_pk?: Maybe<Master_Canned_Response>;
  /** fetch data from the table: "master.city" */
  master_city: Array<Master_City>;
  /** fetch aggregated fields from the table: "master.city" */
  master_city_aggregate: Master_City_Aggregate;
  /** fetch data from the table: "master.city" using primary key columns */
  master_city_by_pk?: Maybe<Master_City>;
  /** fetch data from the table: "master.country" */
  master_country: Array<Master_Country>;
  /** fetch aggregated fields from the table: "master.country" */
  master_country_aggregate: Master_Country_Aggregate;
  /** fetch data from the table: "master.country" using primary key columns */
  master_country_by_pk?: Maybe<Master_Country>;
  /** fetch data from the table: "master.customers" */
  master_customers: Array<Master_Customers>;
  /** fetch aggregated fields from the table: "master.customers" */
  master_customers_aggregate: Master_Customers_Aggregate;
  /** fetch data from the table: "master.customers" using primary key columns */
  master_customers_by_pk?: Maybe<Master_Customers>;
  /** fetch data from the table: "master.state" */
  master_state: Array<Master_State>;
  /** fetch aggregated fields from the table: "master.state" */
  master_state_aggregate: Master_State_Aggregate;
  /** fetch data from the table: "master.state" using primary key columns */
  master_state_by_pk?: Maybe<Master_State>;
  /** fetch data from the table: "master.status" */
  master_status: Array<Master_Status>;
  /** fetch aggregated fields from the table: "master.status" */
  master_status_aggregate: Master_Status_Aggregate;
  /** fetch data from the table: "master.status" using primary key columns */
  master_status_by_pk?: Maybe<Master_Status>;
  /** fetch data from the table: "master.users" */
  master_users: Array<Master_Users>;
  /** fetch aggregated fields from the table: "master.users" */
  master_users_aggregate: Master_Users_Aggregate;
  /** fetch data from the table: "master.users" using primary key columns */
  master_users_by_pk?: Maybe<Master_Users>;
  /** fetch data from the table: "master.work_category" */
  master_work_category: Array<Master_Work_Category>;
  /** fetch aggregated fields from the table: "master.work_category" */
  master_work_category_aggregate: Master_Work_Category_Aggregate;
  /** fetch data from the table: "master.work_category" using primary key columns */
  master_work_category_by_pk?: Maybe<Master_Work_Category>;
  /** fetch data from the table: "notes" */
  notes: Array<Notes>;
  /** fetch aggregated fields from the table: "notes" */
  notes_aggregate: Notes_Aggregate;
  /** fetch data from the table: "notes" using primary key columns */
  notes_by_pk?: Maybe<Notes>;
  /** An array relationship */
  order_details: Array<Order_Details>;
  /** An aggregate relationship */
  order_details_aggregate: Order_Details_Aggregate;
  /** fetch data from the table: "order_details" using primary key columns */
  order_details_by_pk?: Maybe<Order_Details>;
  /** fetch data from the table: "orders" */
  orders: Array<Orders>;
  /** An aggregate relationship */
  orders_aggregate: Orders_Aggregate;
  /** fetch data from the table: "orders" using primary key columns */
  orders_by_pk?: Maybe<Orders>;
  /** An array relationship */
  products: Array<Products>;
  /** An aggregate relationship */
  products_aggregate: Products_Aggregate;
  /** fetch data from the table: "products" using primary key columns */
  products_by_pk?: Maybe<Products>;
  /** fetch data from the table: "region" */
  region: Array<Region>;
  /** fetch aggregated fields from the table: "region" */
  region_aggregate: Region_Aggregate;
  /** fetch data from the table: "region" using primary key columns */
  region_by_pk?: Maybe<Region>;
  /** fetch data from the table: "shippers" */
  shippers: Array<Shippers>;
  /** fetch aggregated fields from the table: "shippers" */
  shippers_aggregate: Shippers_Aggregate;
  /** fetch data from the table: "shippers" using primary key columns */
  shippers_by_pk?: Maybe<Shippers>;
  /** fetch data from the table: "suppliers" */
  suppliers: Array<Suppliers>;
  /** fetch aggregated fields from the table: "suppliers" */
  suppliers_aggregate: Suppliers_Aggregate;
  /** fetch data from the table: "suppliers" using primary key columns */
  suppliers_by_pk?: Maybe<Suppliers>;
  /** An array relationship */
  territories: Array<Territories>;
  /** An aggregate relationship */
  territories_aggregate: Territories_Aggregate;
  /** fetch data from the table: "territories" using primary key columns */
  territories_by_pk?: Maybe<Territories>;
  /** fetch data from the table: "us_states" */
  us_states: Array<Us_States>;
  /** fetch aggregated fields from the table: "us_states" */
  us_states_aggregate: Us_States_Aggregate;
  /** fetch data from the table: "us_states" using primary key columns */
  us_states_by_pk?: Maybe<Us_States>;
  /** fetch data from the table: "work_order" */
  work_order: Array<Work_Order>;
  /** fetch aggregated fields from the table: "work_order" */
  work_order_aggregate: Work_Order_Aggregate;
  /** fetch data from the table: "work_order" using primary key columns */
  work_order_by_pk?: Maybe<Work_Order>;
};


export type Subscription_RootAddressArgs = {
  distinct_on?: Maybe<Array<Address_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Address_Order_By>>;
  where?: Maybe<Address_Bool_Exp>;
};


export type Subscription_RootAddress_AggregateArgs = {
  distinct_on?: Maybe<Array<Address_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Address_Order_By>>;
  where?: Maybe<Address_Bool_Exp>;
};


export type Subscription_RootAddress_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Subscription_RootCategoriesArgs = {
  distinct_on?: Maybe<Array<Categories_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Categories_Order_By>>;
  where?: Maybe<Categories_Bool_Exp>;
};


export type Subscription_RootCategories_AggregateArgs = {
  distinct_on?: Maybe<Array<Categories_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Categories_Order_By>>;
  where?: Maybe<Categories_Bool_Exp>;
};


export type Subscription_RootCategories_By_PkArgs = {
  category_id: Scalars['smallint'];
};


export type Subscription_RootCustomer_Customer_DemoArgs = {
  distinct_on?: Maybe<Array<Customer_Customer_Demo_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Customer_Customer_Demo_Order_By>>;
  where?: Maybe<Customer_Customer_Demo_Bool_Exp>;
};


export type Subscription_RootCustomer_Customer_Demo_AggregateArgs = {
  distinct_on?: Maybe<Array<Customer_Customer_Demo_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Customer_Customer_Demo_Order_By>>;
  where?: Maybe<Customer_Customer_Demo_Bool_Exp>;
};


export type Subscription_RootCustomer_Customer_Demo_By_PkArgs = {
  customer_id: Scalars['bpchar'];
  customer_type_id: Scalars['bpchar'];
};


export type Subscription_RootCustomer_DemographicsArgs = {
  distinct_on?: Maybe<Array<Customer_Demographics_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Customer_Demographics_Order_By>>;
  where?: Maybe<Customer_Demographics_Bool_Exp>;
};


export type Subscription_RootCustomer_Demographics_AggregateArgs = {
  distinct_on?: Maybe<Array<Customer_Demographics_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Customer_Demographics_Order_By>>;
  where?: Maybe<Customer_Demographics_Bool_Exp>;
};


export type Subscription_RootCustomer_Demographics_By_PkArgs = {
  customer_type_id: Scalars['bpchar'];
};


export type Subscription_RootCustomersArgs = {
  distinct_on?: Maybe<Array<Customers_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Customers_Order_By>>;
  where?: Maybe<Customers_Bool_Exp>;
};


export type Subscription_RootCustomers_AggregateArgs = {
  distinct_on?: Maybe<Array<Customers_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Customers_Order_By>>;
  where?: Maybe<Customers_Bool_Exp>;
};


export type Subscription_RootCustomers_By_PkArgs = {
  customer_id: Scalars['bpchar'];
};


export type Subscription_RootEmployee_TerritoriesArgs = {
  distinct_on?: Maybe<Array<Employee_Territories_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Employee_Territories_Order_By>>;
  where?: Maybe<Employee_Territories_Bool_Exp>;
};


export type Subscription_RootEmployee_Territories_AggregateArgs = {
  distinct_on?: Maybe<Array<Employee_Territories_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Employee_Territories_Order_By>>;
  where?: Maybe<Employee_Territories_Bool_Exp>;
};


export type Subscription_RootEmployee_Territories_By_PkArgs = {
  employee_id: Scalars['smallint'];
  territory_id: Scalars['String'];
};


export type Subscription_RootEmployeesArgs = {
  distinct_on?: Maybe<Array<Employees_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Employees_Order_By>>;
  where?: Maybe<Employees_Bool_Exp>;
};


export type Subscription_RootEmployees_AggregateArgs = {
  distinct_on?: Maybe<Array<Employees_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Employees_Order_By>>;
  where?: Maybe<Employees_Bool_Exp>;
};


export type Subscription_RootEmployees_By_PkArgs = {
  employee_id: Scalars['smallint'];
};


export type Subscription_RootImagesArgs = {
  distinct_on?: Maybe<Array<Images_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Images_Order_By>>;
  where?: Maybe<Images_Bool_Exp>;
};


export type Subscription_RootImages_AggregateArgs = {
  distinct_on?: Maybe<Array<Images_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Images_Order_By>>;
  where?: Maybe<Images_Bool_Exp>;
};


export type Subscription_RootImages_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Subscription_RootMaster_Canned_ResponseArgs = {
  distinct_on?: Maybe<Array<Master_Canned_Response_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Master_Canned_Response_Order_By>>;
  where?: Maybe<Master_Canned_Response_Bool_Exp>;
};


export type Subscription_RootMaster_Canned_Response_AggregateArgs = {
  distinct_on?: Maybe<Array<Master_Canned_Response_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Master_Canned_Response_Order_By>>;
  where?: Maybe<Master_Canned_Response_Bool_Exp>;
};


export type Subscription_RootMaster_Canned_Response_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Subscription_RootMaster_CityArgs = {
  distinct_on?: Maybe<Array<Master_City_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Master_City_Order_By>>;
  where?: Maybe<Master_City_Bool_Exp>;
};


export type Subscription_RootMaster_City_AggregateArgs = {
  distinct_on?: Maybe<Array<Master_City_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Master_City_Order_By>>;
  where?: Maybe<Master_City_Bool_Exp>;
};


export type Subscription_RootMaster_City_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Subscription_RootMaster_CountryArgs = {
  distinct_on?: Maybe<Array<Master_Country_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Master_Country_Order_By>>;
  where?: Maybe<Master_Country_Bool_Exp>;
};


export type Subscription_RootMaster_Country_AggregateArgs = {
  distinct_on?: Maybe<Array<Master_Country_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Master_Country_Order_By>>;
  where?: Maybe<Master_Country_Bool_Exp>;
};


export type Subscription_RootMaster_Country_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Subscription_RootMaster_CustomersArgs = {
  distinct_on?: Maybe<Array<Master_Customers_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Master_Customers_Order_By>>;
  where?: Maybe<Master_Customers_Bool_Exp>;
};


export type Subscription_RootMaster_Customers_AggregateArgs = {
  distinct_on?: Maybe<Array<Master_Customers_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Master_Customers_Order_By>>;
  where?: Maybe<Master_Customers_Bool_Exp>;
};


export type Subscription_RootMaster_Customers_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Subscription_RootMaster_StateArgs = {
  distinct_on?: Maybe<Array<Master_State_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Master_State_Order_By>>;
  where?: Maybe<Master_State_Bool_Exp>;
};


export type Subscription_RootMaster_State_AggregateArgs = {
  distinct_on?: Maybe<Array<Master_State_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Master_State_Order_By>>;
  where?: Maybe<Master_State_Bool_Exp>;
};


export type Subscription_RootMaster_State_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Subscription_RootMaster_StatusArgs = {
  distinct_on?: Maybe<Array<Master_Status_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Master_Status_Order_By>>;
  where?: Maybe<Master_Status_Bool_Exp>;
};


export type Subscription_RootMaster_Status_AggregateArgs = {
  distinct_on?: Maybe<Array<Master_Status_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Master_Status_Order_By>>;
  where?: Maybe<Master_Status_Bool_Exp>;
};


export type Subscription_RootMaster_Status_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Subscription_RootMaster_UsersArgs = {
  distinct_on?: Maybe<Array<Master_Users_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Master_Users_Order_By>>;
  where?: Maybe<Master_Users_Bool_Exp>;
};


export type Subscription_RootMaster_Users_AggregateArgs = {
  distinct_on?: Maybe<Array<Master_Users_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Master_Users_Order_By>>;
  where?: Maybe<Master_Users_Bool_Exp>;
};


export type Subscription_RootMaster_Users_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Subscription_RootMaster_Work_CategoryArgs = {
  distinct_on?: Maybe<Array<Master_Work_Category_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Master_Work_Category_Order_By>>;
  where?: Maybe<Master_Work_Category_Bool_Exp>;
};


export type Subscription_RootMaster_Work_Category_AggregateArgs = {
  distinct_on?: Maybe<Array<Master_Work_Category_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Master_Work_Category_Order_By>>;
  where?: Maybe<Master_Work_Category_Bool_Exp>;
};


export type Subscription_RootMaster_Work_Category_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Subscription_RootNotesArgs = {
  distinct_on?: Maybe<Array<Notes_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Notes_Order_By>>;
  where?: Maybe<Notes_Bool_Exp>;
};


export type Subscription_RootNotes_AggregateArgs = {
  distinct_on?: Maybe<Array<Notes_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Notes_Order_By>>;
  where?: Maybe<Notes_Bool_Exp>;
};


export type Subscription_RootNotes_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Subscription_RootOrder_DetailsArgs = {
  distinct_on?: Maybe<Array<Order_Details_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Order_Details_Order_By>>;
  where?: Maybe<Order_Details_Bool_Exp>;
};


export type Subscription_RootOrder_Details_AggregateArgs = {
  distinct_on?: Maybe<Array<Order_Details_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Order_Details_Order_By>>;
  where?: Maybe<Order_Details_Bool_Exp>;
};


export type Subscription_RootOrder_Details_By_PkArgs = {
  order_id: Scalars['smallint'];
  product_id: Scalars['smallint'];
};


export type Subscription_RootOrdersArgs = {
  distinct_on?: Maybe<Array<Orders_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Orders_Order_By>>;
  where?: Maybe<Orders_Bool_Exp>;
};


export type Subscription_RootOrders_AggregateArgs = {
  distinct_on?: Maybe<Array<Orders_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Orders_Order_By>>;
  where?: Maybe<Orders_Bool_Exp>;
};


export type Subscription_RootOrders_By_PkArgs = {
  order_id: Scalars['smallint'];
};


export type Subscription_RootProductsArgs = {
  distinct_on?: Maybe<Array<Products_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Products_Order_By>>;
  where?: Maybe<Products_Bool_Exp>;
};


export type Subscription_RootProducts_AggregateArgs = {
  distinct_on?: Maybe<Array<Products_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Products_Order_By>>;
  where?: Maybe<Products_Bool_Exp>;
};


export type Subscription_RootProducts_By_PkArgs = {
  product_id: Scalars['smallint'];
};


export type Subscription_RootRegionArgs = {
  distinct_on?: Maybe<Array<Region_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Region_Order_By>>;
  where?: Maybe<Region_Bool_Exp>;
};


export type Subscription_RootRegion_AggregateArgs = {
  distinct_on?: Maybe<Array<Region_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Region_Order_By>>;
  where?: Maybe<Region_Bool_Exp>;
};


export type Subscription_RootRegion_By_PkArgs = {
  region_id: Scalars['smallint'];
};


export type Subscription_RootShippersArgs = {
  distinct_on?: Maybe<Array<Shippers_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Shippers_Order_By>>;
  where?: Maybe<Shippers_Bool_Exp>;
};


export type Subscription_RootShippers_AggregateArgs = {
  distinct_on?: Maybe<Array<Shippers_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Shippers_Order_By>>;
  where?: Maybe<Shippers_Bool_Exp>;
};


export type Subscription_RootShippers_By_PkArgs = {
  shipper_id: Scalars['smallint'];
};


export type Subscription_RootSuppliersArgs = {
  distinct_on?: Maybe<Array<Suppliers_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Suppliers_Order_By>>;
  where?: Maybe<Suppliers_Bool_Exp>;
};


export type Subscription_RootSuppliers_AggregateArgs = {
  distinct_on?: Maybe<Array<Suppliers_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Suppliers_Order_By>>;
  where?: Maybe<Suppliers_Bool_Exp>;
};


export type Subscription_RootSuppliers_By_PkArgs = {
  supplier_id: Scalars['smallint'];
};


export type Subscription_RootTerritoriesArgs = {
  distinct_on?: Maybe<Array<Territories_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Territories_Order_By>>;
  where?: Maybe<Territories_Bool_Exp>;
};


export type Subscription_RootTerritories_AggregateArgs = {
  distinct_on?: Maybe<Array<Territories_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Territories_Order_By>>;
  where?: Maybe<Territories_Bool_Exp>;
};


export type Subscription_RootTerritories_By_PkArgs = {
  territory_id: Scalars['String'];
};


export type Subscription_RootUs_StatesArgs = {
  distinct_on?: Maybe<Array<Us_States_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Us_States_Order_By>>;
  where?: Maybe<Us_States_Bool_Exp>;
};


export type Subscription_RootUs_States_AggregateArgs = {
  distinct_on?: Maybe<Array<Us_States_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Us_States_Order_By>>;
  where?: Maybe<Us_States_Bool_Exp>;
};


export type Subscription_RootUs_States_By_PkArgs = {
  state_id: Scalars['smallint'];
};


export type Subscription_RootWork_OrderArgs = {
  distinct_on?: Maybe<Array<Work_Order_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Work_Order_Order_By>>;
  where?: Maybe<Work_Order_Bool_Exp>;
};


export type Subscription_RootWork_Order_AggregateArgs = {
  distinct_on?: Maybe<Array<Work_Order_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Work_Order_Order_By>>;
  where?: Maybe<Work_Order_Bool_Exp>;
};


export type Subscription_RootWork_Order_By_PkArgs = {
  id: Scalars['uuid'];
};

/** columns and relationships of "suppliers" */
export type Suppliers = {
  __typename?: 'suppliers';
  address?: Maybe<Scalars['String']>;
  city?: Maybe<Scalars['String']>;
  company_name: Scalars['String'];
  contact_name?: Maybe<Scalars['String']>;
  contact_title?: Maybe<Scalars['String']>;
  country?: Maybe<Scalars['String']>;
  fax?: Maybe<Scalars['String']>;
  homepage?: Maybe<Scalars['String']>;
  phone?: Maybe<Scalars['String']>;
  postal_code?: Maybe<Scalars['String']>;
  /** An array relationship */
  products: Array<Products>;
  /** An aggregate relationship */
  products_aggregate: Products_Aggregate;
  region?: Maybe<Scalars['String']>;
  supplier_id: Scalars['smallint'];
};


/** columns and relationships of "suppliers" */
export type SuppliersProductsArgs = {
  distinct_on?: Maybe<Array<Products_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Products_Order_By>>;
  where?: Maybe<Products_Bool_Exp>;
};


/** columns and relationships of "suppliers" */
export type SuppliersProducts_AggregateArgs = {
  distinct_on?: Maybe<Array<Products_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Products_Order_By>>;
  where?: Maybe<Products_Bool_Exp>;
};

/** aggregated selection of "suppliers" */
export type Suppliers_Aggregate = {
  __typename?: 'suppliers_aggregate';
  aggregate?: Maybe<Suppliers_Aggregate_Fields>;
  nodes: Array<Suppliers>;
};

/** aggregate fields of "suppliers" */
export type Suppliers_Aggregate_Fields = {
  __typename?: 'suppliers_aggregate_fields';
  avg?: Maybe<Suppliers_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Suppliers_Max_Fields>;
  min?: Maybe<Suppliers_Min_Fields>;
  stddev?: Maybe<Suppliers_Stddev_Fields>;
  stddev_pop?: Maybe<Suppliers_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Suppliers_Stddev_Samp_Fields>;
  sum?: Maybe<Suppliers_Sum_Fields>;
  var_pop?: Maybe<Suppliers_Var_Pop_Fields>;
  var_samp?: Maybe<Suppliers_Var_Samp_Fields>;
  variance?: Maybe<Suppliers_Variance_Fields>;
};


/** aggregate fields of "suppliers" */
export type Suppliers_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Suppliers_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** aggregate avg on columns */
export type Suppliers_Avg_Fields = {
  __typename?: 'suppliers_avg_fields';
  supplier_id?: Maybe<Scalars['Float']>;
};

/** Boolean expression to filter rows from the table "suppliers". All fields are combined with a logical 'AND'. */
export type Suppliers_Bool_Exp = {
  _and?: Maybe<Array<Suppliers_Bool_Exp>>;
  _not?: Maybe<Suppliers_Bool_Exp>;
  _or?: Maybe<Array<Suppliers_Bool_Exp>>;
  address?: Maybe<String_Comparison_Exp>;
  city?: Maybe<String_Comparison_Exp>;
  company_name?: Maybe<String_Comparison_Exp>;
  contact_name?: Maybe<String_Comparison_Exp>;
  contact_title?: Maybe<String_Comparison_Exp>;
  country?: Maybe<String_Comparison_Exp>;
  fax?: Maybe<String_Comparison_Exp>;
  homepage?: Maybe<String_Comparison_Exp>;
  phone?: Maybe<String_Comparison_Exp>;
  postal_code?: Maybe<String_Comparison_Exp>;
  products?: Maybe<Products_Bool_Exp>;
  region?: Maybe<String_Comparison_Exp>;
  supplier_id?: Maybe<Smallint_Comparison_Exp>;
};

/** unique or primary key constraints on table "suppliers" */
export enum Suppliers_Constraint {
  /** unique or primary key constraint */
  PkSuppliers = 'pk_suppliers'
}

/** input type for incrementing numeric columns in table "suppliers" */
export type Suppliers_Inc_Input = {
  supplier_id?: Maybe<Scalars['smallint']>;
};

/** input type for inserting data into table "suppliers" */
export type Suppliers_Insert_Input = {
  address?: Maybe<Scalars['String']>;
  city?: Maybe<Scalars['String']>;
  company_name?: Maybe<Scalars['String']>;
  contact_name?: Maybe<Scalars['String']>;
  contact_title?: Maybe<Scalars['String']>;
  country?: Maybe<Scalars['String']>;
  fax?: Maybe<Scalars['String']>;
  homepage?: Maybe<Scalars['String']>;
  phone?: Maybe<Scalars['String']>;
  postal_code?: Maybe<Scalars['String']>;
  products?: Maybe<Products_Arr_Rel_Insert_Input>;
  region?: Maybe<Scalars['String']>;
  supplier_id?: Maybe<Scalars['smallint']>;
};

/** aggregate max on columns */
export type Suppliers_Max_Fields = {
  __typename?: 'suppliers_max_fields';
  address?: Maybe<Scalars['String']>;
  city?: Maybe<Scalars['String']>;
  company_name?: Maybe<Scalars['String']>;
  contact_name?: Maybe<Scalars['String']>;
  contact_title?: Maybe<Scalars['String']>;
  country?: Maybe<Scalars['String']>;
  fax?: Maybe<Scalars['String']>;
  homepage?: Maybe<Scalars['String']>;
  phone?: Maybe<Scalars['String']>;
  postal_code?: Maybe<Scalars['String']>;
  region?: Maybe<Scalars['String']>;
  supplier_id?: Maybe<Scalars['smallint']>;
};

/** aggregate min on columns */
export type Suppliers_Min_Fields = {
  __typename?: 'suppliers_min_fields';
  address?: Maybe<Scalars['String']>;
  city?: Maybe<Scalars['String']>;
  company_name?: Maybe<Scalars['String']>;
  contact_name?: Maybe<Scalars['String']>;
  contact_title?: Maybe<Scalars['String']>;
  country?: Maybe<Scalars['String']>;
  fax?: Maybe<Scalars['String']>;
  homepage?: Maybe<Scalars['String']>;
  phone?: Maybe<Scalars['String']>;
  postal_code?: Maybe<Scalars['String']>;
  region?: Maybe<Scalars['String']>;
  supplier_id?: Maybe<Scalars['smallint']>;
};

/** response of any mutation on the table "suppliers" */
export type Suppliers_Mutation_Response = {
  __typename?: 'suppliers_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Suppliers>;
};

/** input type for inserting object relation for remote table "suppliers" */
export type Suppliers_Obj_Rel_Insert_Input = {
  data: Suppliers_Insert_Input;
  /** on conflict condition */
  on_conflict?: Maybe<Suppliers_On_Conflict>;
};

/** on conflict condition type for table "suppliers" */
export type Suppliers_On_Conflict = {
  constraint: Suppliers_Constraint;
  update_columns?: Array<Suppliers_Update_Column>;
  where?: Maybe<Suppliers_Bool_Exp>;
};

/** Ordering options when selecting data from "suppliers". */
export type Suppliers_Order_By = {
  address?: Maybe<Order_By>;
  city?: Maybe<Order_By>;
  company_name?: Maybe<Order_By>;
  contact_name?: Maybe<Order_By>;
  contact_title?: Maybe<Order_By>;
  country?: Maybe<Order_By>;
  fax?: Maybe<Order_By>;
  homepage?: Maybe<Order_By>;
  phone?: Maybe<Order_By>;
  postal_code?: Maybe<Order_By>;
  products_aggregate?: Maybe<Products_Aggregate_Order_By>;
  region?: Maybe<Order_By>;
  supplier_id?: Maybe<Order_By>;
};

/** primary key columns input for table: suppliers */
export type Suppliers_Pk_Columns_Input = {
  supplier_id: Scalars['smallint'];
};

/** select columns of table "suppliers" */
export enum Suppliers_Select_Column {
  /** column name */
  Address = 'address',
  /** column name */
  City = 'city',
  /** column name */
  CompanyName = 'company_name',
  /** column name */
  ContactName = 'contact_name',
  /** column name */
  ContactTitle = 'contact_title',
  /** column name */
  Country = 'country',
  /** column name */
  Fax = 'fax',
  /** column name */
  Homepage = 'homepage',
  /** column name */
  Phone = 'phone',
  /** column name */
  PostalCode = 'postal_code',
  /** column name */
  Region = 'region',
  /** column name */
  SupplierId = 'supplier_id'
}

/** input type for updating data in table "suppliers" */
export type Suppliers_Set_Input = {
  address?: Maybe<Scalars['String']>;
  city?: Maybe<Scalars['String']>;
  company_name?: Maybe<Scalars['String']>;
  contact_name?: Maybe<Scalars['String']>;
  contact_title?: Maybe<Scalars['String']>;
  country?: Maybe<Scalars['String']>;
  fax?: Maybe<Scalars['String']>;
  homepage?: Maybe<Scalars['String']>;
  phone?: Maybe<Scalars['String']>;
  postal_code?: Maybe<Scalars['String']>;
  region?: Maybe<Scalars['String']>;
  supplier_id?: Maybe<Scalars['smallint']>;
};

/** aggregate stddev on columns */
export type Suppliers_Stddev_Fields = {
  __typename?: 'suppliers_stddev_fields';
  supplier_id?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_pop on columns */
export type Suppliers_Stddev_Pop_Fields = {
  __typename?: 'suppliers_stddev_pop_fields';
  supplier_id?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_samp on columns */
export type Suppliers_Stddev_Samp_Fields = {
  __typename?: 'suppliers_stddev_samp_fields';
  supplier_id?: Maybe<Scalars['Float']>;
};

/** aggregate sum on columns */
export type Suppliers_Sum_Fields = {
  __typename?: 'suppliers_sum_fields';
  supplier_id?: Maybe<Scalars['smallint']>;
};

/** update columns of table "suppliers" */
export enum Suppliers_Update_Column {
  /** column name */
  Address = 'address',
  /** column name */
  City = 'city',
  /** column name */
  CompanyName = 'company_name',
  /** column name */
  ContactName = 'contact_name',
  /** column name */
  ContactTitle = 'contact_title',
  /** column name */
  Country = 'country',
  /** column name */
  Fax = 'fax',
  /** column name */
  Homepage = 'homepage',
  /** column name */
  Phone = 'phone',
  /** column name */
  PostalCode = 'postal_code',
  /** column name */
  Region = 'region',
  /** column name */
  SupplierId = 'supplier_id'
}

/** aggregate var_pop on columns */
export type Suppliers_Var_Pop_Fields = {
  __typename?: 'suppliers_var_pop_fields';
  supplier_id?: Maybe<Scalars['Float']>;
};

/** aggregate var_samp on columns */
export type Suppliers_Var_Samp_Fields = {
  __typename?: 'suppliers_var_samp_fields';
  supplier_id?: Maybe<Scalars['Float']>;
};

/** aggregate variance on columns */
export type Suppliers_Variance_Fields = {
  __typename?: 'suppliers_variance_fields';
  supplier_id?: Maybe<Scalars['Float']>;
};

/** columns and relationships of "territories" */
export type Territories = {
  __typename?: 'territories';
  /** An array relationship */
  employee_territories: Array<Employee_Territories>;
  /** An aggregate relationship */
  employee_territories_aggregate: Employee_Territories_Aggregate;
  /** An object relationship */
  region: Region;
  region_id: Scalars['smallint'];
  territory_description: Scalars['bpchar'];
  territory_id: Scalars['String'];
};


/** columns and relationships of "territories" */
export type TerritoriesEmployee_TerritoriesArgs = {
  distinct_on?: Maybe<Array<Employee_Territories_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Employee_Territories_Order_By>>;
  where?: Maybe<Employee_Territories_Bool_Exp>;
};


/** columns and relationships of "territories" */
export type TerritoriesEmployee_Territories_AggregateArgs = {
  distinct_on?: Maybe<Array<Employee_Territories_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Employee_Territories_Order_By>>;
  where?: Maybe<Employee_Territories_Bool_Exp>;
};

/** aggregated selection of "territories" */
export type Territories_Aggregate = {
  __typename?: 'territories_aggregate';
  aggregate?: Maybe<Territories_Aggregate_Fields>;
  nodes: Array<Territories>;
};

/** aggregate fields of "territories" */
export type Territories_Aggregate_Fields = {
  __typename?: 'territories_aggregate_fields';
  avg?: Maybe<Territories_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Territories_Max_Fields>;
  min?: Maybe<Territories_Min_Fields>;
  stddev?: Maybe<Territories_Stddev_Fields>;
  stddev_pop?: Maybe<Territories_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Territories_Stddev_Samp_Fields>;
  sum?: Maybe<Territories_Sum_Fields>;
  var_pop?: Maybe<Territories_Var_Pop_Fields>;
  var_samp?: Maybe<Territories_Var_Samp_Fields>;
  variance?: Maybe<Territories_Variance_Fields>;
};


/** aggregate fields of "territories" */
export type Territories_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Territories_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "territories" */
export type Territories_Aggregate_Order_By = {
  avg?: Maybe<Territories_Avg_Order_By>;
  count?: Maybe<Order_By>;
  max?: Maybe<Territories_Max_Order_By>;
  min?: Maybe<Territories_Min_Order_By>;
  stddev?: Maybe<Territories_Stddev_Order_By>;
  stddev_pop?: Maybe<Territories_Stddev_Pop_Order_By>;
  stddev_samp?: Maybe<Territories_Stddev_Samp_Order_By>;
  sum?: Maybe<Territories_Sum_Order_By>;
  var_pop?: Maybe<Territories_Var_Pop_Order_By>;
  var_samp?: Maybe<Territories_Var_Samp_Order_By>;
  variance?: Maybe<Territories_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "territories" */
export type Territories_Arr_Rel_Insert_Input = {
  data: Array<Territories_Insert_Input>;
  /** on conflict condition */
  on_conflict?: Maybe<Territories_On_Conflict>;
};

/** aggregate avg on columns */
export type Territories_Avg_Fields = {
  __typename?: 'territories_avg_fields';
  region_id?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "territories" */
export type Territories_Avg_Order_By = {
  region_id?: Maybe<Order_By>;
};

/** Boolean expression to filter rows from the table "territories". All fields are combined with a logical 'AND'. */
export type Territories_Bool_Exp = {
  _and?: Maybe<Array<Territories_Bool_Exp>>;
  _not?: Maybe<Territories_Bool_Exp>;
  _or?: Maybe<Array<Territories_Bool_Exp>>;
  employee_territories?: Maybe<Employee_Territories_Bool_Exp>;
  region?: Maybe<Region_Bool_Exp>;
  region_id?: Maybe<Smallint_Comparison_Exp>;
  territory_description?: Maybe<Bpchar_Comparison_Exp>;
  territory_id?: Maybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "territories" */
export enum Territories_Constraint {
  /** unique or primary key constraint */
  PkTerritories = 'pk_territories'
}

/** input type for incrementing numeric columns in table "territories" */
export type Territories_Inc_Input = {
  region_id?: Maybe<Scalars['smallint']>;
};

/** input type for inserting data into table "territories" */
export type Territories_Insert_Input = {
  employee_territories?: Maybe<Employee_Territories_Arr_Rel_Insert_Input>;
  region?: Maybe<Region_Obj_Rel_Insert_Input>;
  region_id?: Maybe<Scalars['smallint']>;
  territory_description?: Maybe<Scalars['bpchar']>;
  territory_id?: Maybe<Scalars['String']>;
};

/** aggregate max on columns */
export type Territories_Max_Fields = {
  __typename?: 'territories_max_fields';
  region_id?: Maybe<Scalars['smallint']>;
  territory_description?: Maybe<Scalars['bpchar']>;
  territory_id?: Maybe<Scalars['String']>;
};

/** order by max() on columns of table "territories" */
export type Territories_Max_Order_By = {
  region_id?: Maybe<Order_By>;
  territory_description?: Maybe<Order_By>;
  territory_id?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type Territories_Min_Fields = {
  __typename?: 'territories_min_fields';
  region_id?: Maybe<Scalars['smallint']>;
  territory_description?: Maybe<Scalars['bpchar']>;
  territory_id?: Maybe<Scalars['String']>;
};

/** order by min() on columns of table "territories" */
export type Territories_Min_Order_By = {
  region_id?: Maybe<Order_By>;
  territory_description?: Maybe<Order_By>;
  territory_id?: Maybe<Order_By>;
};

/** response of any mutation on the table "territories" */
export type Territories_Mutation_Response = {
  __typename?: 'territories_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Territories>;
};

/** input type for inserting object relation for remote table "territories" */
export type Territories_Obj_Rel_Insert_Input = {
  data: Territories_Insert_Input;
  /** on conflict condition */
  on_conflict?: Maybe<Territories_On_Conflict>;
};

/** on conflict condition type for table "territories" */
export type Territories_On_Conflict = {
  constraint: Territories_Constraint;
  update_columns?: Array<Territories_Update_Column>;
  where?: Maybe<Territories_Bool_Exp>;
};

/** Ordering options when selecting data from "territories". */
export type Territories_Order_By = {
  employee_territories_aggregate?: Maybe<Employee_Territories_Aggregate_Order_By>;
  region?: Maybe<Region_Order_By>;
  region_id?: Maybe<Order_By>;
  territory_description?: Maybe<Order_By>;
  territory_id?: Maybe<Order_By>;
};

/** primary key columns input for table: territories */
export type Territories_Pk_Columns_Input = {
  territory_id: Scalars['String'];
};

/** select columns of table "territories" */
export enum Territories_Select_Column {
  /** column name */
  RegionId = 'region_id',
  /** column name */
  TerritoryDescription = 'territory_description',
  /** column name */
  TerritoryId = 'territory_id'
}

/** input type for updating data in table "territories" */
export type Territories_Set_Input = {
  region_id?: Maybe<Scalars['smallint']>;
  territory_description?: Maybe<Scalars['bpchar']>;
  territory_id?: Maybe<Scalars['String']>;
};

/** aggregate stddev on columns */
export type Territories_Stddev_Fields = {
  __typename?: 'territories_stddev_fields';
  region_id?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "territories" */
export type Territories_Stddev_Order_By = {
  region_id?: Maybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Territories_Stddev_Pop_Fields = {
  __typename?: 'territories_stddev_pop_fields';
  region_id?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "territories" */
export type Territories_Stddev_Pop_Order_By = {
  region_id?: Maybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Territories_Stddev_Samp_Fields = {
  __typename?: 'territories_stddev_samp_fields';
  region_id?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "territories" */
export type Territories_Stddev_Samp_Order_By = {
  region_id?: Maybe<Order_By>;
};

/** aggregate sum on columns */
export type Territories_Sum_Fields = {
  __typename?: 'territories_sum_fields';
  region_id?: Maybe<Scalars['smallint']>;
};

/** order by sum() on columns of table "territories" */
export type Territories_Sum_Order_By = {
  region_id?: Maybe<Order_By>;
};

/** update columns of table "territories" */
export enum Territories_Update_Column {
  /** column name */
  RegionId = 'region_id',
  /** column name */
  TerritoryDescription = 'territory_description',
  /** column name */
  TerritoryId = 'territory_id'
}

/** aggregate var_pop on columns */
export type Territories_Var_Pop_Fields = {
  __typename?: 'territories_var_pop_fields';
  region_id?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "territories" */
export type Territories_Var_Pop_Order_By = {
  region_id?: Maybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Territories_Var_Samp_Fields = {
  __typename?: 'territories_var_samp_fields';
  region_id?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "territories" */
export type Territories_Var_Samp_Order_By = {
  region_id?: Maybe<Order_By>;
};

/** aggregate variance on columns */
export type Territories_Variance_Fields = {
  __typename?: 'territories_variance_fields';
  region_id?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "territories" */
export type Territories_Variance_Order_By = {
  region_id?: Maybe<Order_By>;
};


/** Boolean expression to compare columns of type "timestamptz". All fields are combined with logical 'AND'. */
export type Timestamptz_Comparison_Exp = {
  _eq?: Maybe<Scalars['timestamptz']>;
  _gt?: Maybe<Scalars['timestamptz']>;
  _gte?: Maybe<Scalars['timestamptz']>;
  _in?: Maybe<Array<Scalars['timestamptz']>>;
  _is_null?: Maybe<Scalars['Boolean']>;
  _lt?: Maybe<Scalars['timestamptz']>;
  _lte?: Maybe<Scalars['timestamptz']>;
  _neq?: Maybe<Scalars['timestamptz']>;
  _nin?: Maybe<Array<Scalars['timestamptz']>>;
};

/** columns and relationships of "us_states" */
export type Us_States = {
  __typename?: 'us_states';
  state_abbr?: Maybe<Scalars['String']>;
  state_id: Scalars['smallint'];
  state_name?: Maybe<Scalars['String']>;
  state_region?: Maybe<Scalars['String']>;
};

/** aggregated selection of "us_states" */
export type Us_States_Aggregate = {
  __typename?: 'us_states_aggregate';
  aggregate?: Maybe<Us_States_Aggregate_Fields>;
  nodes: Array<Us_States>;
};

/** aggregate fields of "us_states" */
export type Us_States_Aggregate_Fields = {
  __typename?: 'us_states_aggregate_fields';
  avg?: Maybe<Us_States_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Us_States_Max_Fields>;
  min?: Maybe<Us_States_Min_Fields>;
  stddev?: Maybe<Us_States_Stddev_Fields>;
  stddev_pop?: Maybe<Us_States_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Us_States_Stddev_Samp_Fields>;
  sum?: Maybe<Us_States_Sum_Fields>;
  var_pop?: Maybe<Us_States_Var_Pop_Fields>;
  var_samp?: Maybe<Us_States_Var_Samp_Fields>;
  variance?: Maybe<Us_States_Variance_Fields>;
};


/** aggregate fields of "us_states" */
export type Us_States_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Us_States_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** aggregate avg on columns */
export type Us_States_Avg_Fields = {
  __typename?: 'us_states_avg_fields';
  state_id?: Maybe<Scalars['Float']>;
};

/** Boolean expression to filter rows from the table "us_states". All fields are combined with a logical 'AND'. */
export type Us_States_Bool_Exp = {
  _and?: Maybe<Array<Us_States_Bool_Exp>>;
  _not?: Maybe<Us_States_Bool_Exp>;
  _or?: Maybe<Array<Us_States_Bool_Exp>>;
  state_abbr?: Maybe<String_Comparison_Exp>;
  state_id?: Maybe<Smallint_Comparison_Exp>;
  state_name?: Maybe<String_Comparison_Exp>;
  state_region?: Maybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "us_states" */
export enum Us_States_Constraint {
  /** unique or primary key constraint */
  PkUsstates = 'pk_usstates'
}

/** input type for incrementing numeric columns in table "us_states" */
export type Us_States_Inc_Input = {
  state_id?: Maybe<Scalars['smallint']>;
};

/** input type for inserting data into table "us_states" */
export type Us_States_Insert_Input = {
  state_abbr?: Maybe<Scalars['String']>;
  state_id?: Maybe<Scalars['smallint']>;
  state_name?: Maybe<Scalars['String']>;
  state_region?: Maybe<Scalars['String']>;
};

/** aggregate max on columns */
export type Us_States_Max_Fields = {
  __typename?: 'us_states_max_fields';
  state_abbr?: Maybe<Scalars['String']>;
  state_id?: Maybe<Scalars['smallint']>;
  state_name?: Maybe<Scalars['String']>;
  state_region?: Maybe<Scalars['String']>;
};

/** aggregate min on columns */
export type Us_States_Min_Fields = {
  __typename?: 'us_states_min_fields';
  state_abbr?: Maybe<Scalars['String']>;
  state_id?: Maybe<Scalars['smallint']>;
  state_name?: Maybe<Scalars['String']>;
  state_region?: Maybe<Scalars['String']>;
};

/** response of any mutation on the table "us_states" */
export type Us_States_Mutation_Response = {
  __typename?: 'us_states_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Us_States>;
};

/** on conflict condition type for table "us_states" */
export type Us_States_On_Conflict = {
  constraint: Us_States_Constraint;
  update_columns?: Array<Us_States_Update_Column>;
  where?: Maybe<Us_States_Bool_Exp>;
};

/** Ordering options when selecting data from "us_states". */
export type Us_States_Order_By = {
  state_abbr?: Maybe<Order_By>;
  state_id?: Maybe<Order_By>;
  state_name?: Maybe<Order_By>;
  state_region?: Maybe<Order_By>;
};

/** primary key columns input for table: us_states */
export type Us_States_Pk_Columns_Input = {
  state_id: Scalars['smallint'];
};

/** select columns of table "us_states" */
export enum Us_States_Select_Column {
  /** column name */
  StateAbbr = 'state_abbr',
  /** column name */
  StateId = 'state_id',
  /** column name */
  StateName = 'state_name',
  /** column name */
  StateRegion = 'state_region'
}

/** input type for updating data in table "us_states" */
export type Us_States_Set_Input = {
  state_abbr?: Maybe<Scalars['String']>;
  state_id?: Maybe<Scalars['smallint']>;
  state_name?: Maybe<Scalars['String']>;
  state_region?: Maybe<Scalars['String']>;
};

/** aggregate stddev on columns */
export type Us_States_Stddev_Fields = {
  __typename?: 'us_states_stddev_fields';
  state_id?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_pop on columns */
export type Us_States_Stddev_Pop_Fields = {
  __typename?: 'us_states_stddev_pop_fields';
  state_id?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_samp on columns */
export type Us_States_Stddev_Samp_Fields = {
  __typename?: 'us_states_stddev_samp_fields';
  state_id?: Maybe<Scalars['Float']>;
};

/** aggregate sum on columns */
export type Us_States_Sum_Fields = {
  __typename?: 'us_states_sum_fields';
  state_id?: Maybe<Scalars['smallint']>;
};

/** update columns of table "us_states" */
export enum Us_States_Update_Column {
  /** column name */
  StateAbbr = 'state_abbr',
  /** column name */
  StateId = 'state_id',
  /** column name */
  StateName = 'state_name',
  /** column name */
  StateRegion = 'state_region'
}

/** aggregate var_pop on columns */
export type Us_States_Var_Pop_Fields = {
  __typename?: 'us_states_var_pop_fields';
  state_id?: Maybe<Scalars['Float']>;
};

/** aggregate var_samp on columns */
export type Us_States_Var_Samp_Fields = {
  __typename?: 'us_states_var_samp_fields';
  state_id?: Maybe<Scalars['Float']>;
};

/** aggregate variance on columns */
export type Us_States_Variance_Fields = {
  __typename?: 'us_states_variance_fields';
  state_id?: Maybe<Scalars['Float']>;
};


/** Boolean expression to compare columns of type "uuid". All fields are combined with logical 'AND'. */
export type Uuid_Comparison_Exp = {
  _eq?: Maybe<Scalars['uuid']>;
  _gt?: Maybe<Scalars['uuid']>;
  _gte?: Maybe<Scalars['uuid']>;
  _in?: Maybe<Array<Scalars['uuid']>>;
  _is_null?: Maybe<Scalars['Boolean']>;
  _lt?: Maybe<Scalars['uuid']>;
  _lte?: Maybe<Scalars['uuid']>;
  _neq?: Maybe<Scalars['uuid']>;
  _nin?: Maybe<Array<Scalars['uuid']>>;
};

/** columns and relationships of "work_order" */
export type Work_Order = {
  __typename?: 'work_order';
  /** An object relationship */
  address?: Maybe<Address>;
  address_id?: Maybe<Scalars['uuid']>;
  canned_response_id?: Maybe<Scalars['uuid']>;
  created_at: Scalars['timestamptz'];
  customer_id?: Maybe<Scalars['uuid']>;
  description: Scalars['String'];
  id: Scalars['uuid'];
  /** An object relationship */
  image?: Maybe<Images>;
  image_id?: Maybe<Scalars['uuid']>;
  /** An object relationship */
  note?: Maybe<Notes>;
  note_id?: Maybe<Scalars['uuid']>;
  /** An object relationship */
  status?: Maybe<Master_Status>;
  status_id?: Maybe<Scalars['uuid']>;
  updated_at: Scalars['timestamptz'];
  /** An object relationship */
  user?: Maybe<Master_Users>;
  user_id?: Maybe<Scalars['uuid']>;
  work_category_id?: Maybe<Scalars['uuid']>;
};

/** aggregated selection of "work_order" */
export type Work_Order_Aggregate = {
  __typename?: 'work_order_aggregate';
  aggregate?: Maybe<Work_Order_Aggregate_Fields>;
  nodes: Array<Work_Order>;
};

/** aggregate fields of "work_order" */
export type Work_Order_Aggregate_Fields = {
  __typename?: 'work_order_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<Work_Order_Max_Fields>;
  min?: Maybe<Work_Order_Min_Fields>;
};


/** aggregate fields of "work_order" */
export type Work_Order_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Work_Order_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "work_order" */
export type Work_Order_Aggregate_Order_By = {
  count?: Maybe<Order_By>;
  max?: Maybe<Work_Order_Max_Order_By>;
  min?: Maybe<Work_Order_Min_Order_By>;
};

/** input type for inserting array relation for remote table "work_order" */
export type Work_Order_Arr_Rel_Insert_Input = {
  data: Array<Work_Order_Insert_Input>;
  /** on conflict condition */
  on_conflict?: Maybe<Work_Order_On_Conflict>;
};

/** Boolean expression to filter rows from the table "work_order". All fields are combined with a logical 'AND'. */
export type Work_Order_Bool_Exp = {
  _and?: Maybe<Array<Work_Order_Bool_Exp>>;
  _not?: Maybe<Work_Order_Bool_Exp>;
  _or?: Maybe<Array<Work_Order_Bool_Exp>>;
  address?: Maybe<Address_Bool_Exp>;
  address_id?: Maybe<Uuid_Comparison_Exp>;
  canned_response_id?: Maybe<Uuid_Comparison_Exp>;
  created_at?: Maybe<Timestamptz_Comparison_Exp>;
  customer_id?: Maybe<Uuid_Comparison_Exp>;
  description?: Maybe<String_Comparison_Exp>;
  id?: Maybe<Uuid_Comparison_Exp>;
  image?: Maybe<Images_Bool_Exp>;
  image_id?: Maybe<Uuid_Comparison_Exp>;
  note?: Maybe<Notes_Bool_Exp>;
  note_id?: Maybe<Uuid_Comparison_Exp>;
  status?: Maybe<Master_Status_Bool_Exp>;
  status_id?: Maybe<Uuid_Comparison_Exp>;
  updated_at?: Maybe<Timestamptz_Comparison_Exp>;
  user?: Maybe<Master_Users_Bool_Exp>;
  user_id?: Maybe<Uuid_Comparison_Exp>;
  work_category_id?: Maybe<Uuid_Comparison_Exp>;
};

/** unique or primary key constraints on table "work_order" */
export enum Work_Order_Constraint {
  /** unique or primary key constraint */
  WorkOrderPkey = 'work_order_pkey'
}

/** input type for inserting data into table "work_order" */
export type Work_Order_Insert_Input = {
  address?: Maybe<Address_Obj_Rel_Insert_Input>;
  address_id?: Maybe<Scalars['uuid']>;
  canned_response_id?: Maybe<Scalars['uuid']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  customer_id?: Maybe<Scalars['uuid']>;
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['uuid']>;
  image?: Maybe<Images_Obj_Rel_Insert_Input>;
  image_id?: Maybe<Scalars['uuid']>;
  note?: Maybe<Notes_Obj_Rel_Insert_Input>;
  note_id?: Maybe<Scalars['uuid']>;
  status?: Maybe<Master_Status_Obj_Rel_Insert_Input>;
  status_id?: Maybe<Scalars['uuid']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
  user?: Maybe<Master_Users_Obj_Rel_Insert_Input>;
  user_id?: Maybe<Scalars['uuid']>;
  work_category_id?: Maybe<Scalars['uuid']>;
};

/** aggregate max on columns */
export type Work_Order_Max_Fields = {
  __typename?: 'work_order_max_fields';
  address_id?: Maybe<Scalars['uuid']>;
  canned_response_id?: Maybe<Scalars['uuid']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  customer_id?: Maybe<Scalars['uuid']>;
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['uuid']>;
  image_id?: Maybe<Scalars['uuid']>;
  note_id?: Maybe<Scalars['uuid']>;
  status_id?: Maybe<Scalars['uuid']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
  user_id?: Maybe<Scalars['uuid']>;
  work_category_id?: Maybe<Scalars['uuid']>;
};

/** order by max() on columns of table "work_order" */
export type Work_Order_Max_Order_By = {
  address_id?: Maybe<Order_By>;
  canned_response_id?: Maybe<Order_By>;
  created_at?: Maybe<Order_By>;
  customer_id?: Maybe<Order_By>;
  description?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  image_id?: Maybe<Order_By>;
  note_id?: Maybe<Order_By>;
  status_id?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
  user_id?: Maybe<Order_By>;
  work_category_id?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type Work_Order_Min_Fields = {
  __typename?: 'work_order_min_fields';
  address_id?: Maybe<Scalars['uuid']>;
  canned_response_id?: Maybe<Scalars['uuid']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  customer_id?: Maybe<Scalars['uuid']>;
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['uuid']>;
  image_id?: Maybe<Scalars['uuid']>;
  note_id?: Maybe<Scalars['uuid']>;
  status_id?: Maybe<Scalars['uuid']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
  user_id?: Maybe<Scalars['uuid']>;
  work_category_id?: Maybe<Scalars['uuid']>;
};

/** order by min() on columns of table "work_order" */
export type Work_Order_Min_Order_By = {
  address_id?: Maybe<Order_By>;
  canned_response_id?: Maybe<Order_By>;
  created_at?: Maybe<Order_By>;
  customer_id?: Maybe<Order_By>;
  description?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  image_id?: Maybe<Order_By>;
  note_id?: Maybe<Order_By>;
  status_id?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
  user_id?: Maybe<Order_By>;
  work_category_id?: Maybe<Order_By>;
};

/** response of any mutation on the table "work_order" */
export type Work_Order_Mutation_Response = {
  __typename?: 'work_order_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Work_Order>;
};

/** on conflict condition type for table "work_order" */
export type Work_Order_On_Conflict = {
  constraint: Work_Order_Constraint;
  update_columns?: Array<Work_Order_Update_Column>;
  where?: Maybe<Work_Order_Bool_Exp>;
};

/** Ordering options when selecting data from "work_order". */
export type Work_Order_Order_By = {
  address?: Maybe<Address_Order_By>;
  address_id?: Maybe<Order_By>;
  canned_response_id?: Maybe<Order_By>;
  created_at?: Maybe<Order_By>;
  customer_id?: Maybe<Order_By>;
  description?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  image?: Maybe<Images_Order_By>;
  image_id?: Maybe<Order_By>;
  note?: Maybe<Notes_Order_By>;
  note_id?: Maybe<Order_By>;
  status?: Maybe<Master_Status_Order_By>;
  status_id?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
  user?: Maybe<Master_Users_Order_By>;
  user_id?: Maybe<Order_By>;
  work_category_id?: Maybe<Order_By>;
};

/** primary key columns input for table: work_order */
export type Work_Order_Pk_Columns_Input = {
  id: Scalars['uuid'];
};

/** select columns of table "work_order" */
export enum Work_Order_Select_Column {
  /** column name */
  AddressId = 'address_id',
  /** column name */
  CannedResponseId = 'canned_response_id',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  CustomerId = 'customer_id',
  /** column name */
  Description = 'description',
  /** column name */
  Id = 'id',
  /** column name */
  ImageId = 'image_id',
  /** column name */
  NoteId = 'note_id',
  /** column name */
  StatusId = 'status_id',
  /** column name */
  UpdatedAt = 'updated_at',
  /** column name */
  UserId = 'user_id',
  /** column name */
  WorkCategoryId = 'work_category_id'
}

/** input type for updating data in table "work_order" */
export type Work_Order_Set_Input = {
  address_id?: Maybe<Scalars['uuid']>;
  canned_response_id?: Maybe<Scalars['uuid']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  customer_id?: Maybe<Scalars['uuid']>;
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['uuid']>;
  image_id?: Maybe<Scalars['uuid']>;
  note_id?: Maybe<Scalars['uuid']>;
  status_id?: Maybe<Scalars['uuid']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
  user_id?: Maybe<Scalars['uuid']>;
  work_category_id?: Maybe<Scalars['uuid']>;
};

/** update columns of table "work_order" */
export enum Work_Order_Update_Column {
  /** column name */
  AddressId = 'address_id',
  /** column name */
  CannedResponseId = 'canned_response_id',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  CustomerId = 'customer_id',
  /** column name */
  Description = 'description',
  /** column name */
  Id = 'id',
  /** column name */
  ImageId = 'image_id',
  /** column name */
  NoteId = 'note_id',
  /** column name */
  StatusId = 'status_id',
  /** column name */
  UpdatedAt = 'updated_at',
  /** column name */
  UserId = 'user_id',
  /** column name */
  WorkCategoryId = 'work_category_id'
}

export type ProductsQueryVariables = Exact<{ [key: string]: never; }>;


export type ProductsQuery = (
  { __typename?: 'query_root' }
  & { products: Array<(
    { __typename?: 'products' }
    & Pick<Products, 'category_id' | 'discontinued' | 'product_id' | 'product_name' | 'quantity_per_unit' | 'reorder_level' | 'supplier_id' | 'unit_price' | 'units_in_stock' | 'units_on_order'>
  )> }
);


export const ProductsDocument = gql`
    query products {
  products {
    category_id
    discontinued
    product_id
    product_name
    quantity_per_unit
    reorder_level
    supplier_id
    unit_price
    units_in_stock
    units_on_order
  }
}
    `;

/**
 * __useProductsQuery__
 *
 * To run a query within a React component, call `useProductsQuery` and pass it any options that fit your needs.
 * When your component renders, `useProductsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useProductsQuery({
 *   variables: {
 *   },
 * });
 */
export function useProductsQuery(baseOptions?: Apollo.QueryHookOptions<ProductsQuery, ProductsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<ProductsQuery, ProductsQueryVariables>(ProductsDocument, options);
      }
export function useProductsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ProductsQuery, ProductsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<ProductsQuery, ProductsQueryVariables>(ProductsDocument, options);
        }
export type ProductsQueryHookResult = ReturnType<typeof useProductsQuery>;
export type ProductsLazyQueryHookResult = ReturnType<typeof useProductsLazyQuery>;
export type ProductsQueryResult = Apollo.QueryResult<ProductsQuery, ProductsQueryVariables>;
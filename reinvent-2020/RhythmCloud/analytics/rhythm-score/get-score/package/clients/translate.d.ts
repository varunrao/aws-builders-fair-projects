import {Request} from '../lib/request';
import {Response} from '../lib/response';
import {AWSError} from '../lib/error';
import {Service} from '../lib/service';
import {ServiceConfigurationOptions} from '../lib/service';
import {ConfigBase as Config} from '../lib/config';
interface Blob {}
declare class Translate extends Service {
  /**
   * Constructs a service object. This object has one method for each API operation.
   */
  constructor(options?: Translate.Types.ClientConfiguration)
  config: Config & Translate.Types.ClientConfiguration;
  /**
   * A synchronous action that deletes a custom terminology.
   */
  deleteTerminology(params: Translate.Types.DeleteTerminologyRequest, callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * A synchronous action that deletes a custom terminology.
   */
  deleteTerminology(callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Gets the properties associated with an asycnhronous batch translation job including name, ID, status, source and target languages, input/output S3 buckets, and so on.
   */
  describeTextTranslationJob(params: Translate.Types.DescribeTextTranslationJobRequest, callback?: (err: AWSError, data: Translate.Types.DescribeTextTranslationJobResponse) => void): Request<Translate.Types.DescribeTextTranslationJobResponse, AWSError>;
  /**
   * Gets the properties associated with an asycnhronous batch translation job including name, ID, status, source and target languages, input/output S3 buckets, and so on.
   */
  describeTextTranslationJob(callback?: (err: AWSError, data: Translate.Types.DescribeTextTranslationJobResponse) => void): Request<Translate.Types.DescribeTextTranslationJobResponse, AWSError>;
  /**
   * Retrieves a custom terminology.
   */
  getTerminology(params: Translate.Types.GetTerminologyRequest, callback?: (err: AWSError, data: Translate.Types.GetTerminologyResponse) => void): Request<Translate.Types.GetTerminologyResponse, AWSError>;
  /**
   * Retrieves a custom terminology.
   */
  getTerminology(callback?: (err: AWSError, data: Translate.Types.GetTerminologyResponse) => void): Request<Translate.Types.GetTerminologyResponse, AWSError>;
  /**
   * Creates or updates a custom terminology, depending on whether or not one already exists for the given terminology name. Importing a terminology with the same name as an existing one will merge the terminologies based on the chosen merge strategy. Currently, the only supported merge strategy is OVERWRITE, and so the imported terminology will overwrite an existing terminology of the same name. If you import a terminology that overwrites an existing one, the new terminology take up to 10 minutes to fully propagate and be available for use in a translation due to cache policies with the DataPlane service that performs the translations.
   */
  importTerminology(params: Translate.Types.ImportTerminologyRequest, callback?: (err: AWSError, data: Translate.Types.ImportTerminologyResponse) => void): Request<Translate.Types.ImportTerminologyResponse, AWSError>;
  /**
   * Creates or updates a custom terminology, depending on whether or not one already exists for the given terminology name. Importing a terminology with the same name as an existing one will merge the terminologies based on the chosen merge strategy. Currently, the only supported merge strategy is OVERWRITE, and so the imported terminology will overwrite an existing terminology of the same name. If you import a terminology that overwrites an existing one, the new terminology take up to 10 minutes to fully propagate and be available for use in a translation due to cache policies with the DataPlane service that performs the translations.
   */
  importTerminology(callback?: (err: AWSError, data: Translate.Types.ImportTerminologyResponse) => void): Request<Translate.Types.ImportTerminologyResponse, AWSError>;
  /**
   * Provides a list of custom terminologies associated with your account.
   */
  listTerminologies(params: Translate.Types.ListTerminologiesRequest, callback?: (err: AWSError, data: Translate.Types.ListTerminologiesResponse) => void): Request<Translate.Types.ListTerminologiesResponse, AWSError>;
  /**
   * Provides a list of custom terminologies associated with your account.
   */
  listTerminologies(callback?: (err: AWSError, data: Translate.Types.ListTerminologiesResponse) => void): Request<Translate.Types.ListTerminologiesResponse, AWSError>;
  /**
   * Gets a list of the batch translation jobs that you have submitted.
   */
  listTextTranslationJobs(params: Translate.Types.ListTextTranslationJobsRequest, callback?: (err: AWSError, data: Translate.Types.ListTextTranslationJobsResponse) => void): Request<Translate.Types.ListTextTranslationJobsResponse, AWSError>;
  /**
   * Gets a list of the batch translation jobs that you have submitted.
   */
  listTextTranslationJobs(callback?: (err: AWSError, data: Translate.Types.ListTextTranslationJobsResponse) => void): Request<Translate.Types.ListTextTranslationJobsResponse, AWSError>;
  /**
   * Starts an asynchronous batch translation job. Batch translation jobs can be used to translate large volumes of text across multiple documents at once. For more information, see async. Batch translation jobs can be described with the DescribeTextTranslationJob operation, listed with the ListTextTranslationJobs operation, and stopped with the StopTextTranslationJob operation.  Amazon Translate does not support batch translation of multiple source languages at once. 
   */
  startTextTranslationJob(params: Translate.Types.StartTextTranslationJobRequest, callback?: (err: AWSError, data: Translate.Types.StartTextTranslationJobResponse) => void): Request<Translate.Types.StartTextTranslationJobResponse, AWSError>;
  /**
   * Starts an asynchronous batch translation job. Batch translation jobs can be used to translate large volumes of text across multiple documents at once. For more information, see async. Batch translation jobs can be described with the DescribeTextTranslationJob operation, listed with the ListTextTranslationJobs operation, and stopped with the StopTextTranslationJob operation.  Amazon Translate does not support batch translation of multiple source languages at once. 
   */
  startTextTranslationJob(callback?: (err: AWSError, data: Translate.Types.StartTextTranslationJobResponse) => void): Request<Translate.Types.StartTextTranslationJobResponse, AWSError>;
  /**
   * Stops an asynchronous batch translation job that is in progress. If the job's state is IN_PROGRESS, the job will be marked for termination and put into the STOP_REQUESTED state. If the job completes before it can be stopped, it is put into the COMPLETED state. Otherwise, the job is put into the STOPPED state. Asynchronous batch translation jobs are started with the StartTextTranslationJob operation. You can use the DescribeTextTranslationJob or ListTextTranslationJobs operations to get a batch translation job's JobId.
   */
  stopTextTranslationJob(params: Translate.Types.StopTextTranslationJobRequest, callback?: (err: AWSError, data: Translate.Types.StopTextTranslationJobResponse) => void): Request<Translate.Types.StopTextTranslationJobResponse, AWSError>;
  /**
   * Stops an asynchronous batch translation job that is in progress. If the job's state is IN_PROGRESS, the job will be marked for termination and put into the STOP_REQUESTED state. If the job completes before it can be stopped, it is put into the COMPLETED state. Otherwise, the job is put into the STOPPED state. Asynchronous batch translation jobs are started with the StartTextTranslationJob operation. You can use the DescribeTextTranslationJob or ListTextTranslationJobs operations to get a batch translation job's JobId.
   */
  stopTextTranslationJob(callback?: (err: AWSError, data: Translate.Types.StopTextTranslationJobResponse) => void): Request<Translate.Types.StopTextTranslationJobResponse, AWSError>;
  /**
   * Translates input text from the source language to the target language. For a list of available languages and language codes, see what-is-languages.
   */
  translateText(params: Translate.Types.TranslateTextRequest, callback?: (err: AWSError, data: Translate.Types.TranslateTextResponse) => void): Request<Translate.Types.TranslateTextResponse, AWSError>;
  /**
   * Translates input text from the source language to the target language. For a list of available languages and language codes, see what-is-languages.
   */
  translateText(callback?: (err: AWSError, data: Translate.Types.TranslateTextResponse) => void): Request<Translate.Types.TranslateTextResponse, AWSError>;
}
declare namespace Translate {
  export interface AppliedTerminology {
    /**
     * The name of the custom terminology applied to the input text by Amazon Translate for the translated text response.
     */
    Name?: ResourceName;
    /**
     * The specific terms of the custom terminology applied to the input text by Amazon Translate for the translated text response. A maximum of 250 terms will be returned, and the specific terms applied will be the first 250 terms in the source text. 
     */
    Terms?: TermList;
  }
  export type AppliedTerminologyList = AppliedTerminology[];
  export type BoundedLengthString = string;
  export type ClientTokenString = string;
  export type ContentType = string;
  export interface DeleteTerminologyRequest {
    /**
     * The name of the custom terminology being deleted. 
     */
    Name: ResourceName;
  }
  export interface DescribeTextTranslationJobRequest {
    /**
     * The identifier that Amazon Translate generated for the job. The StartTextTranslationJob operation returns this identifier in its response.
     */
    JobId: JobId;
  }
  export interface DescribeTextTranslationJobResponse {
    /**
     * An object that contains the properties associated with an asynchronous batch translation job.
     */
    TextTranslationJobProperties?: TextTranslationJobProperties;
  }
  export type Description = string;
  export interface EncryptionKey {
    /**
     * The type of encryption key used by Amazon Translate to encrypt custom terminologies.
     */
    Type: EncryptionKeyType;
    /**
     * The Amazon Resource Name (ARN) of the encryption key being used to encrypt the custom terminology.
     */
    Id: EncryptionKeyID;
  }
  export type EncryptionKeyID = string;
  export type EncryptionKeyType = "KMS"|string;
  export interface GetTerminologyRequest {
    /**
     * The name of the custom terminology being retrieved.
     */
    Name: ResourceName;
    /**
     * The data format of the custom terminology being retrieved, either CSV or TMX.
     */
    TerminologyDataFormat: TerminologyDataFormat;
  }
  export interface GetTerminologyResponse {
    /**
     * The properties of the custom terminology being retrieved.
     */
    TerminologyProperties?: TerminologyProperties;
    /**
     * The data location of the custom terminology being retrieved. The custom terminology file is returned in a presigned url that has a 30 minute expiration.
     */
    TerminologyDataLocation?: TerminologyDataLocation;
  }
  export type IamRoleArn = string;
  export interface ImportTerminologyRequest {
    /**
     * The name of the custom terminology being imported.
     */
    Name: ResourceName;
    /**
     * The merge strategy of the custom terminology being imported. Currently, only the OVERWRITE merge strategy is supported. In this case, the imported terminology will overwrite an existing terminology of the same name.
     */
    MergeStrategy: MergeStrategy;
    /**
     * The description of the custom terminology being imported.
     */
    Description?: Description;
    /**
     * The terminology data for the custom terminology being imported.
     */
    TerminologyData: TerminologyData;
    /**
     * The encryption key for the custom terminology being imported.
     */
    EncryptionKey?: EncryptionKey;
  }
  export interface ImportTerminologyResponse {
    /**
     * The properties of the custom terminology being imported.
     */
    TerminologyProperties?: TerminologyProperties;
  }
  export interface InputDataConfig {
    /**
     * The URI of the AWS S3 folder that contains the input file. The folder must be in the same Region as the API endpoint you are calling.
     */
    S3Uri: S3Uri;
    /**
     * The multipurpose internet mail extension (MIME) type of the input files. Valid values are text/plain for plaintext files and text/html for HTML files.
     */
    ContentType: ContentType;
  }
  export type Integer = number;
  export interface JobDetails {
    /**
     * The number of documents successfully processed during a translation job.
     */
    TranslatedDocumentsCount?: Integer;
    /**
     * The number of documents that could not be processed during a translation job.
     */
    DocumentsWithErrorsCount?: Integer;
    /**
     * The number of documents used as input in a translation job.
     */
    InputDocumentsCount?: Integer;
  }
  export type JobId = string;
  export type JobName = string;
  export type JobStatus = "SUBMITTED"|"IN_PROGRESS"|"COMPLETED"|"COMPLETED_WITH_ERROR"|"FAILED"|"STOP_REQUESTED"|"STOPPED"|string;
  export type LanguageCodeString = string;
  export type LanguageCodeStringList = LanguageCodeString[];
  export interface ListTerminologiesRequest {
    /**
     * If the result of the request to ListTerminologies was truncated, include the NextToken to fetch the next group of custom terminologies. 
     */
    NextToken?: NextToken;
    /**
     * The maximum number of custom terminologies returned per list request.
     */
    MaxResults?: MaxResultsInteger;
  }
  export interface ListTerminologiesResponse {
    /**
     * The properties list of the custom terminologies returned on the list request.
     */
    TerminologyPropertiesList?: TerminologyPropertiesList;
    /**
     *  If the response to the ListTerminologies was truncated, the NextToken fetches the next group of custom terminologies.
     */
    NextToken?: NextToken;
  }
  export interface ListTextTranslationJobsRequest {
    /**
     * The parameters that specify which batch translation jobs to retrieve. Filters include job name, job status, and submission time. You can only set one filter at a time.
     */
    Filter?: TextTranslationJobFilter;
    /**
     * The token to request the next page of results.
     */
    NextToken?: NextToken;
    /**
     * The maximum number of results to return in each page. The default value is 100.
     */
    MaxResults?: MaxResultsInteger;
  }
  export interface ListTextTranslationJobsResponse {
    /**
     * A list containing the properties of each job that is returned.
     */
    TextTranslationJobPropertiesList?: TextTranslationJobPropertiesList;
    /**
     * The token to use to retreive the next page of results. This value is null when there are no more results to return.
     */
    NextToken?: NextToken;
  }
  export type MaxResultsInteger = number;
  export type MergeStrategy = "OVERWRITE"|string;
  export type NextToken = string;
  export interface OutputDataConfig {
    /**
     * The URI of the S3 folder that contains a translation job's output file. The folder must be in the same Region as the API endpoint that you are calling.
     */
    S3Uri: S3Uri;
  }
  export type ResourceName = string;
  export type ResourceNameList = ResourceName[];
  export type S3Uri = string;
  export interface StartTextTranslationJobRequest {
    /**
     * The name of the batch translation job to be performed.
     */
    JobName?: JobName;
    /**
     * Specifies the format and S3 location of the input documents for the translation job.
     */
    InputDataConfig: InputDataConfig;
    /**
     * Specifies the S3 folder to which your job output will be saved. 
     */
    OutputDataConfig: OutputDataConfig;
    /**
     * The Amazon Resource Name (ARN) of an AWS Identity Access and Management (IAM) role that grants Amazon Translate read access to your input data. For more nformation, see identity-and-access-management.
     */
    DataAccessRoleArn: IamRoleArn;
    /**
     * The language code of the input language. For a list of language codes, see what-is-languages. Amazon Translate does not automatically detect a source language during batch translation jobs.
     */
    SourceLanguageCode: LanguageCodeString;
    /**
     * The language code of the output language.
     */
    TargetLanguageCodes: TargetLanguageCodeStringList;
    /**
     * The name of the terminology to use in the batch translation job. For a list of available terminologies, use the ListTerminologies operation.
     */
    TerminologyNames?: ResourceNameList;
    /**
     * The client token of the EC2 instance calling the request. This token is auto-generated when using the Amazon Translate SDK. Otherwise, use the DescribeInstances EC2 operation to retreive an instance's client token. For more information, see Client Tokens in the EC2 User Guide.
     */
    ClientToken: ClientTokenString;
  }
  export interface StartTextTranslationJobResponse {
    /**
     * The identifier generated for the job. To get the status of a job, use this ID with the DescribeTextTranslationJob operation.
     */
    JobId?: JobId;
    /**
     * The status of the job. Possible values include:    SUBMITTED - The job has been received and is queued for processing.    IN_PROGRESS - Amazon Translate is processing the job.    COMPLETED - The job was successfully completed and the output is available.    COMPLETED_WITH_ERRORS - The job was completed with errors. The errors can be analyzed in the job's output.    FAILED - The job did not complete. To get details, use the DescribeTextTranslationJob operation.    STOP_REQUESTED - The user who started the job has requested that it be stopped.    STOPPED - The job has been stopped.  
     */
    JobStatus?: JobStatus;
  }
  export interface StopTextTranslationJobRequest {
    /**
     * The job ID of the job to be stopped.
     */
    JobId: JobId;
  }
  export interface StopTextTranslationJobResponse {
    /**
     * The job ID of the stopped batch translation job.
     */
    JobId?: JobId;
    /**
     * The status of the designated job. Upon successful completion, the job's status will be STOPPED.
     */
    JobStatus?: JobStatus;
  }
  export type String = string;
  export type TargetLanguageCodeStringList = LanguageCodeString[];
  export interface Term {
    /**
     * The source text of the term being translated by the custom terminology.
     */
    SourceText?: String;
    /**
     * The target text of the term being translated by the custom terminology.
     */
    TargetText?: String;
  }
  export type TermList = Term[];
  export type TerminologyArn = string;
  export interface TerminologyData {
    /**
     * The file containing the custom terminology data. Your version of the AWS SDK performs a Base64-encoding on this field before sending a request to the AWS service. Users of the SDK should not perform Base64-encoding themselves.
     */
    File: TerminologyFile;
    /**
     * The data format of the custom terminology. Either CSV or TMX.
     */
    Format: TerminologyDataFormat;
  }
  export type TerminologyDataFormat = "CSV"|"TMX"|string;
  export interface TerminologyDataLocation {
    /**
     * The repository type for the custom terminology data.
     */
    RepositoryType: String;
    /**
     * The location of the custom terminology data.
     */
    Location: String;
  }
  export type TerminologyFile = Buffer|Uint8Array|Blob|string;
  export interface TerminologyProperties {
    /**
     * The name of the custom terminology.
     */
    Name?: ResourceName;
    /**
     * The description of the custom terminology properties.
     */
    Description?: Description;
    /**
     *  The Amazon Resource Name (ARN) of the custom terminology. 
     */
    Arn?: TerminologyArn;
    /**
     * The language code for the source text of the translation request for which the custom terminology is being used.
     */
    SourceLanguageCode?: LanguageCodeString;
    /**
     * The language codes for the target languages available with the custom terminology file. All possible target languages are returned in array.
     */
    TargetLanguageCodes?: LanguageCodeStringList;
    /**
     * The encryption key for the custom terminology.
     */
    EncryptionKey?: EncryptionKey;
    /**
     * The size of the file used when importing a custom terminology.
     */
    SizeBytes?: Integer;
    /**
     * The number of terms included in the custom terminology.
     */
    TermCount?: Integer;
    /**
     * The time at which the custom terminology was created, based on the timestamp.
     */
    CreatedAt?: Timestamp;
    /**
     * The time at which the custom terminology was last update, based on the timestamp.
     */
    LastUpdatedAt?: Timestamp;
  }
  export type TerminologyPropertiesList = TerminologyProperties[];
  export interface TextTranslationJobFilter {
    /**
     * Filters the list of jobs by name.
     */
    JobName?: JobName;
    /**
     * Filters the list of jobs based by job status.
     */
    JobStatus?: JobStatus;
    /**
     * Filters the list of jobs based on the time that the job was submitted for processing and returns only the jobs submitted before the specified time. Jobs are returned in ascending order, oldest to newest.
     */
    SubmittedBeforeTime?: Timestamp;
    /**
     * Filters the list of jobs based on the time that the job was submitted for processing and returns only the jobs submitted after the specified time. Jobs are returned in descending order, newest to oldest.
     */
    SubmittedAfterTime?: Timestamp;
  }
  export interface TextTranslationJobProperties {
    /**
     * The ID of the translation job.
     */
    JobId?: JobId;
    /**
     * The user-defined name of the translation job.
     */
    JobName?: JobName;
    /**
     * The status of the translation job.
     */
    JobStatus?: JobStatus;
    /**
     * The number of documents successfully and unsuccessfully processed during the translation job.
     */
    JobDetails?: JobDetails;
    /**
     * The language code of the language of the source text. The language must be a language supported by Amazon Translate.
     */
    SourceLanguageCode?: LanguageCodeString;
    /**
     * The language code of the language of the target text. The language must be a language supported by Amazon Translate.
     */
    TargetLanguageCodes?: TargetLanguageCodeStringList;
    /**
     * A list containing the names of the terminologies applied to a translation job. Only one terminology can be applied per StartTextTranslationJob request at this time.
     */
    TerminologyNames?: ResourceNameList;
    /**
     * An explanation of any errors that may have occured during the translation job.
     */
    Message?: UnboundedLengthString;
    /**
     * The time at which the translation job was submitted.
     */
    SubmittedTime?: Timestamp;
    /**
     * The time at which the translation job ended.
     */
    EndTime?: Timestamp;
    /**
     * The input configuration properties that were specified when the job was requested.
     */
    InputDataConfig?: InputDataConfig;
    /**
     * The output configuration properties that were specified when the job was requested.
     */
    OutputDataConfig?: OutputDataConfig;
    /**
     * The Amazon Resource Name (ARN) of an AWS Identity Access and Management (IAM) role that granted Amazon Translate read access to the job's input data.
     */
    DataAccessRoleArn?: IamRoleArn;
  }
  export type TextTranslationJobPropertiesList = TextTranslationJobProperties[];
  export type Timestamp = Date;
  export interface TranslateTextRequest {
    /**
     * The text to translate. The text string can be a maximum of 5,000 bytes long. Depending on your character set, this may be fewer than 5,000 characters.
     */
    Text: BoundedLengthString;
    /**
     * The name of the terminology list file to be used in the TranslateText request. You can use 1 terminology list at most in a TranslateText request. Terminology lists can contain a maximum of 256 terms.
     */
    TerminologyNames?: ResourceNameList;
    /**
     * The language code for the language of the source text. The language must be a language supported by Amazon Translate. For a list of language codes, see what-is-languages. To have Amazon Translate determine the source language of your text, you can specify auto in the SourceLanguageCode field. If you specify auto, Amazon Translate will call Amazon Comprehend to determine the source language.
     */
    SourceLanguageCode: LanguageCodeString;
    /**
     * The language code requested for the language of the target text. The language must be a language supported by Amazon Translate.
     */
    TargetLanguageCode: LanguageCodeString;
  }
  export interface TranslateTextResponse {
    /**
     * The translated text.
     */
    TranslatedText: String;
    /**
     * The language code for the language of the source text.
     */
    SourceLanguageCode: LanguageCodeString;
    /**
     * The language code for the language of the target text. 
     */
    TargetLanguageCode: LanguageCodeString;
    /**
     * The names of the custom terminologies applied to the input text by Amazon Translate for the translated text response.
     */
    AppliedTerminologies?: AppliedTerminologyList;
  }
  export type UnboundedLengthString = string;
  /**
   * A string in YYYY-MM-DD format that represents the latest possible API version that can be used in this service. Specify 'latest' to use the latest possible version.
   */
  export type apiVersion = "2017-07-01"|"latest"|string;
  export interface ClientApiVersions {
    /**
     * A string in YYYY-MM-DD format that represents the latest possible API version that can be used in this service. Specify 'latest' to use the latest possible version.
     */
    apiVersion?: apiVersion;
  }
  export type ClientConfiguration = ServiceConfigurationOptions & ClientApiVersions;
  /**
   * Contains interfaces for use with the Translate client.
   */
  export import Types = Translate;
}
export = Translate;

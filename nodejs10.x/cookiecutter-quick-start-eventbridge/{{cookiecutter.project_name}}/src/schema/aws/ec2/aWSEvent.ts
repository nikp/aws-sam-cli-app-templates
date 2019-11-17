import {Expose} from 'class-transformer';

export class AWSEvent<T> {
  @Expose({name: "detail"})
    detail: T;
  @Expose({name: "detail-type"})
    detailType: string;
  @Expose({name: "resources"})
    resources: Array<String>;
  @Expose({name: "id"})
    id: string;
  @Expose({name: "source"})
    source: string;
  @Expose({name: "time"})
    time: Date;
  @Expose({name: "region"})
    region: string;
  @Expose({name: "version"})
    version: string;
  @Expose({name: "account"})
    account: string;
}

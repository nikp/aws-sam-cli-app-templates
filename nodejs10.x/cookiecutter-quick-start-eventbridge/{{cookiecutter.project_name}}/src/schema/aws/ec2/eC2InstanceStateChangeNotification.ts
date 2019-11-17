import {Expose} from 'class-transformer';

export class EC2InstanceStateChangeNotification { 
  @Expose({name: "instance-id"})
    instance_id: string;
  @Expose({name: "state"})
    state: string;
}

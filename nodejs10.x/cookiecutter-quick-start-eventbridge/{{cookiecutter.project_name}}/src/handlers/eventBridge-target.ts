import {ScheduledEvent, Context} from 'aws-lambda'
import { AWSEvent } from '../schema/aws/ec2/aWSEvent';
import { EC2InstanceStateChangeNotification } from '../schema/aws/ec2/eC2InstanceStateChangeNotification';

export const handler = async (event: ScheduledEvent, context: Context): Promise<any> => {
    console.log("BOOO, functionName: " + context.functionName + ", resources=" + event.resources)
    console.log(event)
	const response = JSON.stringify(event);
    return response;
}
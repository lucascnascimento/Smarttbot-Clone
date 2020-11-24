import { format } from 'date-fns';
import { RobotInstance } from '../../../types/types';

// Format the movimentation date from robotInstances
/**
 * Add a dateHour field to each object in movimentations array in the provided
 * Robot instance array.
 * @param robots Robot instance array which the modification will be performed
 */
export function modifyRobotMovimentations(
  robots: RobotInstance[]
): RobotInstance[] {
  return robots.reduce((robotAcc, robot) => {
    if (robot.movimentations.length > 0) {
      const updatedMov = robot.movimentations.map((mov) => ({
        ...mov,
        dateHour: `${format(new Date(mov.date), 'HH')}h`,
      }));

      return [...robotAcc, { ...robot, movimentations: updatedMov }];
    }
    return [...robotAcc, robot];
  }, [] as Array<RobotInstance>);
}

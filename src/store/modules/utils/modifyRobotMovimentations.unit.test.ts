import { modifyRobotMovimentations } from './modifyRobotMovimentations';
import { robotList, modifiedRobotList } from '../robotList/mockData';

describe('Function to modify the robot movimentations array', () => {
  it(`should add a datehour property to each movimentation object in RobotInstance`, () => {
    const modifiedList = modifyRobotMovimentations(robotList);

    expect(modifiedList).toEqual(modifiedRobotList);
  });
});

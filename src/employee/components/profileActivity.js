import React from "react";
import {
  Card,
  CardBody,
  CardHeader,
  Table,
  TableBody,
  TableHeader
} from "../../common";

const ProfileActivity = ({ activities }) => {
  const renderActivities = activityId => (
    <tr key={activityId}>
      <td>{activities[activityId].type}</td>
      <td>{activities[activityId].message}</td>
    </tr>
  );
  const renderEmpty = () => (
    <tr>
      <td>Nothing to show</td>
    </tr>
  );
  const activitiesId = Object.keys(activities);
  return (
    <Card>
      <CardHeader title="Activity" category="" />
      <CardBody>
        <Table>
          <TableHeader titles={["TYPE", "DESCRIPTION"]} />
          <TableBody>
            {activitiesId.length > 0
              ? activitiesId.map(renderActivities)
              : renderEmpty()}
          </TableBody>
        </Table>
      </CardBody>
    </Card>
  );
};

export default ProfileActivity;

import {
  Container,
  List,
  ListItem,
  ListIcon,
  OrderedList,
  UnorderedList,
} from "@chakra-ui/react";

function driverPolesList({ driverPoles }) {
  return (
    <Container>
      <List>
        {driverPoles.map((driver) => (
          <ListItem
            key={driver.driverId}
          >{`${driver.givenName} ${driver.familyName} - ${driver.numberOfPoles}`}</ListItem>
        ))}
      </List>
    </Container>
  );
}

export default driverPolesList;

import { useEffect, useState } from "react";
import Link from "next/link";

import { IDriver, IQualiSeason } from "../../interfaces";
import { getDriverPolesForASeason } from "../../services/quali-service";

interface IProps {
  qualiSeason: IQualiSeason;
}

function DriverPolesList({ qualiSeason }: IProps) {
  const [driverPolesForASeason, setDriverPolesForASeason] = useState<IDriver[]>(
    []
  );

  useEffect(() => {
    const poles = getDriverPolesForASeason(qualiSeason);
    setDriverPolesForASeason(poles);
  }, [qualiSeason]);

  return <div>We are going to redesign this whole site</div>;
}

export default DriverPolesList;

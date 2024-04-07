import { Module } from "@nestjs/common";
import { myGateWay } from "./gateway";

@Module({
  imports: [myGateWay]
})
export class GateWayModule {}
type AllType = {
  name: string;
  position: number;
  color: string;
  weight: number;
};

type NameColorType = Pick<AllType, "name" | "color">;

type PositionWeightType = Pick<AllType, "position" | "weight">;

function compare(top: NameColorType, bottom: PositionWeightType): AllType {
  return {
    name: top.name,
    color: top.color,
    position: bottom.position,
    weight: bottom.weight,
  };
}

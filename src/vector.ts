class Vector {
  constructor(private x: number, private y: number) {
  }

  public static add(a: Vector, b: Vector) {
    return new Vector(a.x + b.x, a.y + b.y)
  }

  public static substract(a: Vector, b: Vector) {
    return new Vector(a.x - b.x, a.y - b.y)
  }

  public static dot(a: Vector, b: Vector) {
    return a.x * b.x + a.y * b.y
  }

  public static cross(a: Vector, b: Vector) {
    return a.x * b.y - a.y * b.x
  }

  public static scale(v: Vector, scale: number) {
    return new Vector(v.x * scale, v.y * scale)
  }
}


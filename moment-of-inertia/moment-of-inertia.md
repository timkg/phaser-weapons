# Moment of Inertia

## What is Moment of Inertia?

* Moment of inertia (MOI) is the rotational equivalent of mass
* MOI indicates how hard it is to rotate something
* MOI is determined by how mass is distributed along a body's axis of rotation
* Adding mass anywhere on a weapon will always increase its MOI
* Intuitive example: fix the center point of a barbell and try to rotate it by pushing against one
of the plates. Now slide the plates to the center, fix the center point again, and try to rotate 
the barbell by pushing against one of the ends of the bar, where the plates used to be. In the second case the rotation will
be much easier. That's because the mass is closer to the barbel's center of rotation - it has a lower MOI.

## Why is Moment of Inertia important?

* A sword is translated and rotated
* Translation changes the position of the sword - where it is
* Rotation changes the angle of the sword - towards where it points
* Rotation happens whenever we control the tip of the sword, which is all the time:
    * to target a thrust (keep the point on target)
    * while swinging the sword (the wrist extends forwards during a swing, and retracts afterwards)
    * to act from the bind, either by thrusting or some other technique
    * when entering or changing guards, which are a combination of sword position + tip direction
* The higher the Moment of Inertia, the more cumbersome these actions get


# Handy formulas
## Linear
* F = m * a
* v = a * t
* s = 1/2 * a * t^2
* L = m * v
* KE = 1/2 * m * v^2

## Rotational
* &Gamma; = I * &alpha; (gamma/Torque = moment of inertia * alpha/angular acceleration) 
* &omega; = &alpha * t (omega/angular velocity = alpha/angular acceleration * time)
* &theta; = 1/2 &alpha; * t^2 (theta/angle = half alpha/angular acceleration * time squared)
* H = I * &omega; (angular momentum = moment of inertia * omega/angular velocity)
* KE = I * &omega;^2 (kinetic energy = moment of inertia * omega/angular velocity squared)
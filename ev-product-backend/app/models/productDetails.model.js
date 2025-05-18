const mongoose = require('mongoose');

const subscriptionPlanSchema = new mongoose.Schema({
  title: String,
  data: [
    {
      duration: String,
      subscription: String,
      deposit: String,
      upto2: String,
      y3to4: String,
      y5to6: String
    }
  ]
}, { _id: false });

const productDetailsSchema = new mongoose.Schema({
  id: { type: Number, required: true, unique: true }, // your custom product ID
  title: { type: String, required: true },
  price: { type: String, required: true },
  emi: String,
  description: String,
  longDescription: String,
  brand: String,
  category: String,
  color: String,
  colors: [String],
  addOns: [String],
  kwhBattery: String,
  kmRange: String,
  chargingTime: String,
  image: { type: String, required: true },

  specification: {
    exShowroomPrice: String,
    certifiedRange: String,
    trueRange: String,
    motorPowerNominalPeak: String,
    chargingTime: String,
    fastCharging: String,
    motorType: String,
    batteryType: String,
    batteryCapacity: String,
    keyType: String,
    chargerType: String,
    ignition: String,
    frontTyreSize: String,
    rearTyreSize: String,
    brakingSystem: String,
    frontBrakeDiameter: String,
    rearBrakeDiameter: String,
    frontBrakeType: String,
    rearBrakeType: String,
    frameType: String,
    transmission: String,
    topSpeed: String,
    ridingModes: String,
    acceleration0To40kmh: String,
    maxTorque: String,
    instrumentCluster: String,
    reverseAssist: String,
    chargingStationLocator: String,
    sideStandMotorCutoff: String,
    music: String,
    weight: String,
    length: String,
    width: String,
    height: String,
    gradeability: String,
    wheelbase: String,
    seatHeight: String,
    waterWade: String,
    headlight: String,
    tailLight: String,
    indicators: String,
    underSeatStorage: String,
    batteryIpRating: String,
    motorIpRating: String,
    controllerIpRating: String,
    chassisType: String,
    frontSuspension: String,
    rearSuspension: String,
    bagHook: String,
    vehicleWarranty: String,
    batteryWarranty: String
  },

  subscription: {
    plan1: subscriptionPlanSchema,
    plan2: subscriptionPlanSchema
  }

}, { timestamps: true });

module.exports = mongoose.model('ProductDetails', productDetailsSchema);

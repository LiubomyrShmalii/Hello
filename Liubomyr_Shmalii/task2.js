db.users.updateMany(
  {
      isBlocked: { $ne: true },
      country: { $nin: ["France", "Germany"] }
  },
  {
      $inc: { balance: 100 }
  }
)
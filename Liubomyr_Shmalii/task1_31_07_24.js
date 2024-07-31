db.users.updateMany(
  { country: "China", is_blocked: "true" },
  { $inc: { balance: 50 } }
)
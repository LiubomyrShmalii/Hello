db.users.updateMany(
  { country: "China", status: "blocked" },
  { 
      $set: { status: "active" },
      $inc: { balance: 50 }
  }
)
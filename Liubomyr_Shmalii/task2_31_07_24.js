db.users.find(
  {
      country: { $nin: ["China", "France"] },
      is_blocked: [null, false], // Только активные пользователи
      balance: { $gt: 10, $lt: 1000 }
  },
  {
      fullname: 1,
      balance: 1
  }
)
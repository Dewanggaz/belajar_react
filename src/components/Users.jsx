import { useState, useEffect } from "react"

export default function Users() {
  const [users, setUsers] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => {
        setUsers(data.slice(0, 10))
        setLoading(false)
      })
  }, [])

  if (loading) {
    return (
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 text-center text-gray-400">
          Loading...
        </div>
      </section>
    )
  }

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-[#0d2b6b] mb-10">
          Kepala Organisasi
        </h2>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-5">
          {users.map((user) => (
            <div
              key={user.id}
              className="bg-white rounded-xl p-4 flex flex-col items-center text-center shadow-sm hover:shadow-md hover:-translate-y-1 transition"
            >
              <img
                src={`https://i.pravatar.cc/100?img=${user.id}`}
                alt={user.name}
                className="w-16 h-16 rounded-full object-cover mb-3 border-2 border-blue-100"
              />
              <p className="font-semibold text-[#0d2b6b] text-sm">{user.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
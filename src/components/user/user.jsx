import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useFetch } from '../../hooks/useFetch'
import { User as UserIcon, Mail, Phone } from 'lucide-react'

const Users = () => {
  const { data, loading, error } = useFetch("/users")
  const navigate = useNavigate()

  return (
    <div className="bg-gray-900 min-h-screen py-10 px-4 md:px-10">
      <h2 className="text-white text-3xl font-bold mb-8 text-center">Users</h2>

      <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {data?.map(user => (
          <div key={user.id} onClick={() =>navigate(`/user/${user.id}`) } className="cursor-pointer bg-gray-800 rounded-2xl shadow-lg p-5 hover:shadow-xl hover:scale-[1.02] transition-transform duration-300 text-white"
          >
            <div className="flex items-center gap-4 mb-4">
              <div className="w-14 h-14 rounded-full overflow-hidden bg-gray-700 flex items-center justify-center">
                {user.avatar ? (
                  <img src={user.avatar} alt={`${user.name.firstname} ${user.name.lastname}`} className="w-full h-full object-cover"
                  />
                ) : (
                  <UserIcon className="text-gray-400 w-6 h-6" />
                )}
              </div>
              <div>
                <h3 className="text-lg font-semibold">
                  {user.name.firstname} {user.name.lastname}
                </h3>
                <p className="text-sm text-gray-400">@{user.username}</p>
              </div>
            </div>

            <div className="text-sm space-y-1">
              <p className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-gray-400" />
                <span>{user.email}</span>
              </p>
              <p className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-gray-400" />
                <span>{user.phone}</span>
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default React.memo(Users)

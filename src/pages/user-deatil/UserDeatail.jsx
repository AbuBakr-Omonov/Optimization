import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useFetch } from '../../hooks/useFetch';
import { Mail, Phone, User, MapPin, CalendarDays, Briefcase } from 'lucide-react';

const UserDetail = () => {
    const { id } = useParams();
    const { data: user, loading, error } = useFetch(`/users/${id}`);
    useEffect(() =>{
        scrollTo(0,0)
    },[id])

    if (error) return <div className="text-red-500 text-center py-20">Error loading user.</div>;
    if (!user) return null;

    const fullAddress = `${user?.address?.number || ''} ${user?.address?.street || ''}, ${user?.address?.city || ''}, ${user?.address?.zipcode || ''}`;

    return (
        <div className="bg-gray-900 min-h-screen flex justify-center items-center text-white px-4">
            <div className="bg-gray-800 rounded-xl p-6 w-full max-w-2xl shadow-xl space-y-6">
                <div className="flex items-center gap-6">
                    <div className="w-20 h-20 bg-gray-700 rounded-full flex items-center justify-center">
                        <User className="w-10 h-10 text-gray-400" />
                    </div>
                    <div>
                        <h2 className="text-3xl font-semibold">{user.name.firstname} {user.name.lastname}</h2>
                        <p className="text-sm text-gray-400">@{user.username}</p>
                    </div>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
                    <p className="flex items-center gap-2">
                        <Mail className="w-4 h-4 text-gray-400" />
                        {user.email}
                    </p>
                    <p className="flex items-center gap-2">
                        <Phone className="w-4 h-4 text-gray-400" />
                        {user.phone}
                    </p>
                    <p className="flex items-center gap-2">
                        <MapPin className="w-4 h-4 text-gray-400" />
                        {fullAddress}
                    </p>
                    <p className="flex items-center gap-2">
                        <CalendarDays className="w-4 h-4 text-gray-400" />
                        Registered: {new Date(user?.registeredAt || Date.now()).toLocaleDateString()}
                    </p>
                </div>
               
            </div>
        </div>
    );
};

export default UserDetail;

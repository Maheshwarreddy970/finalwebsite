import React from 'react';
import { Clock } from '../ui/clock';
import { cn } from '@/lib/utils';

function Workinghours({ className, testDriveInfo }) {
  // Abbreviate function for days
  const abbreviate = (day) => {
    const map = {
      "MONDAY": "Mon",
      "TUESDAY": "Tue",
      "WEDNESDAY": "Wed",
      "THURSDAY": "Thu",
      "FRIDAY": "Fri",
      "SATURDAY": "Sat",
      "SUNDAY": "Sun"
    };
    return map[day.toUpperCase()] || day.slice(0, 3);
  };

  // Determine working hours data
  let workingHoursData;
  if (testDriveInfo?.dealership?.workingHours) {
    const wh = testDriveInfo.dealership.workingHours;
    const daysOrder = ["MONDAY", "TUESDAY", "WEDNESDAY", "THURSDAY", "FRIDAY", "SATURDAY", "SUNDAY"];
    const sortedWh = wh.sort((a, b) => daysOrder.indexOf(a.dayOfWeek) - daysOrder.indexOf(b.dayOfWeek));
    workingHoursData = sortedWh.map((day) => ({
      day: abbreviate(day.dayOfWeek),
      isOpen: day.isOpen,
      openTime: day.openTime,
      closeTime: day.closeTime
    }));
  } else {
    // Default static working hours
    workingHoursData = [
      { day: 'Mon', isOpen: true, openTime: '10:00', closeTime: '15:00' },
      { day: 'Tue', isOpen: true, openTime: '10:00', closeTime: '19:00' },
      { day: 'Wed', isOpen: true, openTime: '15:00', closeTime: '19:00' },
      { day: 'Thu', isOpen: true, openTime: '10:00', closeTime: '16:00' },
      { day: 'Fri', isOpen: true, openTime: '10:00', closeTime: '16:00' },
      { day: 'Sat', isOpen: false, openTime: null, closeTime: null },
      { day: 'Sun', isOpen: true, openTime: '10:00', closeTime: '19:00' }
    ];
  }

  // Get current day
  const getCurrentDay = () => {
    const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    return days[new Date().getDay()];
  };

  // Check if currently open
  const isCurrentlyOpen = (dayData) => {
    if (!dayData.isOpen) return false;
    
    const now = new Date();
    const currentTime = now.getHours() * 100 + now.getMinutes();
    
    const openTime = parseInt(dayData.openTime?.replace(':', '') || '0');
    const closeTime = parseInt(dayData.closeTime?.replace(':', '') || '0');
    
    return currentTime >= openTime && currentTime <= closeTime;
  };

  const currentDay = getCurrentDay();

  return (
    <div className={cn(" mt-16",className)}>
      <div className="w-full ">
        <h2 className="text-4xl text-wrap  text-center mb-8 text-gray-800">Visit Us During Our Convenient Business Hours</h2>
        <div className=' h-60 flex flex-col justify-center items-center overflow-hidden '>
        <Clock></Clock>
        </div>
        {/* Horizontal layout matching your screenshot */}
        <div className="flex flex-wrap gap-4 justify-center">
          {workingHoursData.map((dayData, index) => {
            const isCurrentDay = dayData.day === currentDay;
            const isOpen = isCurrentlyOpen(dayData);
            
            // Border colors based on current day and open status
            let borderClass = '';
            if (isCurrentDay) {
              borderClass = isOpen ? 'border-2 border-green-500' : 'border-2 border-red-500';
            } else {
              borderClass = 'border border-gray-200';
            }
            
            // Top border color
            const topBorderClass = dayData.isOpen ? 'border-t-4 border-t-orange-400' : 'border-t-4 border-t-red-500';
            
            return (
              <div
                key={index}
                className={`bg-white rounded-lg p-4 shadow-sm min-w-[150px] text-center ${topBorderClass} ${borderClass} transition-all duration-300 hover:shadow-md`}
              >
                {/* Day name */}
                <h3 className={`text-lg font-medium mb-2 ${
                  isCurrentDay ? 'text-gray-900' : 'text-gray-600'
                }`}>
                  {dayData.day}
                </h3>

                {/* Hours */}
                <div className={`text-sm font-medium ${
                  isCurrentDay && dayData.isOpen
                    ? isOpen 
                      ? 'text-green-600' 
                      : 'text-red-600'
                    : dayData.isOpen 
                      ? 'text-gray-700'
                      : 'text-red-600'
                }`}>
                  {dayData.isOpen ? (
                    `${dayData.openTime}-${dayData.closeTime}`
                  ) : (
                    '-'
                  )}
                </div>

                {/* Status indicator for current day */}
                {isCurrentDay && (
                  <div className="mt-2">
                    <span className={`text-xs px-2 py-1 rounded-full ${
                      dayData.isOpen
                        ? isOpen 
                          ? 'bg-green-100 text-green-800' 
                          : 'bg-red-100 text-red-800'
                        : 'bg-red-100 text-red-800'
                    }`}>
                      {dayData.isOpen ? (isOpen ? 'Open Now' : 'Closed') : 'Closed'}
                    </span>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Current time display */}
        <div className="mt-8 text-center ">
          <p className="text-sm text-gray-600">
            Current time: {new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })} | 
            Current day: <span className="font-medium">{currentDay}</span>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Workinghours;
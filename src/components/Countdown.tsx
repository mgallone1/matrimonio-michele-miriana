import React, { useState, useEffect } from 'react';

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

export const Countdown: React.FC = () => {
  const targetDate = new Date('2027-07-02T16:30:00+02:00').getTime();

  const calculateTimeLeft = (): TimeLeft => {
    const difference = targetDate - new Date().getTime();
    if (difference <= 0) {
      return { days: 0, hours: 0, minutes: 0, seconds: 0 };
    }

    return {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / 1000 / 60) % 60),
      seconds: Math.floor((difference / 1000) % 60),
    };
  };

  const [timeLeft, setTimeLeft] = useState<TimeLeft>(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const downloadIcs = () => {
    const icsContent = [
      'BEGIN:VCALENDAR',
      'VERSION:2.0',
      'PRODID:-//Michele e Miriana//Matrimonio//IT',
      'CALSCALE:GREGORIAN',
      'METHOD:PUBLISH',
      'BEGIN:VEVENT',
      'UID:matrimonio-michele-miriana-20270702',
      'SUMMARY:Matrimonio di Michele & Miriana',
      'DESCRIPTION:Rito civile e ricevimento di nozze a Tenuta Tana di Volpe, Albanella (SA).',
      'LOCATION:Tenuta Tana di Volpe, Via S. Nicola, 84044 Albanella SA, Italia',
      'DTSTART:20270702T143000Z',
      'DTEND:20270702T233000Z',
      'STATUS:CONFIRMED',
      'END:VEVENT',
      'END:VCALENDAR',
    ].join('\r\n');

    const blob = new Blob([icsContent], { type: 'text/calendar;charset=utf-8' });
    const link = document.createElement('a');
    link.href = window.URL.createObjectURL(blob);
    link.setAttribute('download', 'matrimonio-michele-miriana.ics');
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const googleCalendarUrl = `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${encodeURIComponent(
    'Matrimonio di Michele & Miriana'
  )}&dates=20270702T143000Z/20270702T233000Z&details=${encodeURIComponent(
    'Rito civile e ricevimento a Tenuta Tana di Volpe, Albanella (SA).'
  )}&location=${encodeURIComponent('Tenuta Tana di Volpe, Albanella SA')}`;

  const timeUnits = [
    { label: 'giorni', value: timeLeft.days },
    { label: 'ore', value: timeLeft.hours },
    { label: 'minuti', value: timeLeft.minutes },
    { label: 'secondi', value: timeLeft.seconds },
  ];

  return (
    <section className="py-14 px-4 max-w-4xl mx-auto text-center" aria-label="Conto alla rovescia al matrimonio">
      <div className="white-card rounded-3xl p-8 sm:p-12 relative overflow-hidden">
        <p className="font-sans text-xs uppercase tracking-[0.35em] text-sage font-medium mb-3">
          Il Conto alla Rovescia
        </p>

        <h3 className="font-serif text-2xl sm:text-3xl text-espresso font-normal mb-8">
          Venerdì, <span className="font-medium text-rose-mauve">2 Luglio 2027</span> • Ore 16:30
        </h3>

        {/* 
          Countdown su UNA SOLA RIGA continua, pulito, elegante e perfettamente calibrato anche per smartphone 
        */}
        <div className="max-w-xl mx-auto py-5 px-4 sm:px-8 rounded-2xl bg-white border border-champagne shadow-sm mb-10 flex items-center justify-center gap-2 sm:gap-6">
          {timeUnits.map((item, idx) => (
            <React.Fragment key={item.label}>
              <div className="flex flex-col items-center">
                <span className="font-serif text-2xl sm:text-4xl md:text-5xl font-light text-burgundy tracking-tight leading-none">
                  {String(item.value).padStart(2, '0')}
                </span>
                <span className="text-[10px] sm:text-xs uppercase tracking-[0.18em] text-sage font-sans mt-1.5 font-medium">
                  {item.label}
                </span>
              </div>
              {idx < timeUnits.length - 1 && (
                <span className="text-champagne font-light text-xl sm:text-3xl mb-4 select-none">
                  :
                </span>
              )}
            </React.Fragment>
          ))}
        </div>

        {/* Pulsanti Aggiungi al Calendario */}
        <div className="flex flex-wrap items-center justify-center gap-3">
          <a
            href={googleCalendarUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-secondary text-xs uppercase tracking-wider py-2.5 px-5"
          >
            Aggiungi a Google Calendar
          </a>
          <button
            type="button"
            onClick={downloadIcs}
            className="btn-secondary text-xs uppercase tracking-wider py-2.5 px-5"
          >
            Scarica per Apple / iCal (.ics)
          </button>
        </div>
      </div>
    </section>
  );
};

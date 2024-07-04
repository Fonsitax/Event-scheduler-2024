import React from 'react';

function EventDetails() {
  return (
    <>
      <div className="card bg-base-100 w-96 shadow-xl">
        <div className="card-body justify-center">
          <h2 className="card-title badge-accent badge-outline">
            Eventtitel
            <div className="badge badge-secondary">WOW</div>
          </h2>
          <p>
            Erlebe das aufregendste JavaScript-Programmier-Event des Jahres!
            Tauche ein in eine Welt voller Innovation und Kreativität, wo
            brillante Köpfe aus aller Welt zusammenkommen. Entdecke die neuesten
            Trends und Technologien, die die Zukunft des Webentwicklungs
            verändern werden. Lerne von den Besten der Branche in inspirierenden
            Keynotes und praxisnahen Workshops. Vernetze dich mit
            Gleichgesinnten und knüpfe wertvolle Kontakte für deine Karriere.
            Stelle dich spannenden Herausforderungen bei unseren Hackathons und
            zeige dein Können. Lass dich von atemberaubenden Demos und
            beeindruckenden Projekten begeistern. Gewinne fantastische Preise
            und exklusive Goodies. Genieße eine unvergessliche Atmosphäre voller
            Energie und Enthusiasmus. Verpasse nicht diese einmalige
            Gelegenheit, dein JavaScript-Wissen auf das nächste Level zu
            bringen!
          </p>
          <div className="card-actions justify-end">
            <div className="badge badge-outline">Location</div>
            <div className="badge badge-outline">Eventdatum</div>
          </div>
        </div>
      </div>
    </>
  );
}

export default EventDetails;

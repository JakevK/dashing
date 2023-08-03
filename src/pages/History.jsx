/* History
 * Brief summary of morse code history
 */

/* -- imports -- */
import React from "react";
import "../styles/static.css";
import telegraph from "./images/telegraph.gif";

// exported component
export default function History() {
  // return static HTML content
  return (
    <div className="container static">
      <h1>History</h1>
      <p>
        In the past, the primary method of long distance communication was
        through a human messenger who would have to travel by foot or horse in
        order to deliver a memorized or written message to the recipient. The
        problem with this was that humans and horses are unreliable and slow,
        limiting the effectiveness with which a message could be sent. A new
        solution was required.
      </p>
      <p>
        In 1837, two Englishmen named William Fothergill Cooke and Charles
        Wheatstone invented a machine called the telegraph. Initially, it would
        send messages through electrical signals which would line up compass
        needles on a grid to point to a specific letter of the alphabet. This
        allowed messages to be sent very quickly over long distances.
      </p>
      <img src={telegraph} alt="telegraph" />
      <div className="caption">
        An old telegraph machine (
        <a href=" http://invention.smithsonian.org/resources/fa_wu_telegraphregister.aspx">
          source
        </a>
        )
      </div>
      <p>
        However, a certain artist and inventor from the USA was not satisfied
        with this solution. He devised his own system of encoding and decoding
        words, which used pulses of electricity. These pulses were transmitted
        in varying lengths, with different sequences and permutations
        representing different characters. This man's name was Samuel F.B.
        Morse, and this code would be known as morse code.
      </p>
      <p>
        Eventually, in the year 1851, a conference in Berlin brought about the
        standardization of an international version of morse code. This form of
        encoding quickly became the most popular method of long distance
        communication over telegraph, due to its simplicity and efficiency. Even
        today, where the telegraph has been rendered near obsolete by more
        modern forms of communication, some organisations such as the US Navy
        still use morse code to transmit messages, and international morse code
        is the encoding method of choice for hobbyists and professionals alike.
      </p>
    </div>
  );
}

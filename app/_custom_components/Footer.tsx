import React from "react";
import Link from "next/link";

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <div className="bg-primary pt-16">
      <div className="container flex flex-col md:flex-row justify-between items-stretch md:space-x-24">
        <img
          src="/_assets/logo-white-vertical-full.png"
          alt="Ecoscope white logo"
          className="w-full md:w-3/12 pb-16"
        />
        <div className="flex flex-1 flex-col justify-between pb-3">
          <div>
            <div className="flex flex-col md:flex-row w-full justify-end pb-6 [&_a:not(:last-child)]:mr-0 md:[&_a:not(:last-child)]:mr-8 border-b-2 border-white">
              <Link href="/news" className="text-white">
                News
              </Link>
              <Link href="/case-studies" className="text-white">
                Case Studies
              </Link>
              <Link href="/research-and-development" className="text-white">
                Research and Development
              </Link>
            </div>
            <div className="w-full text-white flex flex-row justify-between pt-6">
              <p>Dublin, Ireland</p>
              <div className="[&_svg]:h-7 flex flex-row space-x-3 text-white">
                <svg
                  viewBox="0 0 668 668"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M134 0.666748C60.362 0.666748 0.666687 60.3621 0.666687 134V534C0.666687 607.637 60.362 667.333 134 667.333H534C607.637 667.333 667.333 607.637 667.333 534V134C667.333 60.3621 607.637 0.666748 534 0.666748H134ZM67.3334 134C67.3334 97.1811 97.181 67.3334 134 67.3334H534C570.82 67.3334 600.667 97.1811 600.667 134V534C600.667 570.82 570.82 600.667 534 600.667H134C97.181 600.667 67.3334 570.82 67.3334 534V134ZM234 300.667C234 282.257 219.076 267.333 200.667 267.333C182.257 267.333 167.333 282.257 167.333 300.667V500.667C167.333 519.077 182.257 534 200.667 534C219.076 534 234 519.077 234 500.667V300.667ZM250.667 184C250.667 211.614 228.281 234 200.667 234C173.052 234 150.667 211.614 150.667 184C150.667 156.386 173.052 134 200.667 134C228.281 134 250.667 156.386 250.667 184ZM334 267.333C345.317 267.333 355.317 272.973 361.343 281.597C378.43 272.34 397.453 267.333 417.333 267.333C489.313 267.333 534 331.527 534 386.38V386.633V386.883V387.137V387.39V387.643V387.9V388.153V388.41V388.667V388.923V389.183V389.44V389.7V389.96V390.22V390.48V390.74V391.003V391.267V391.527V391.793V392.057V392.32V392.587V392.85V393.117V393.383V393.653V393.92V394.19V394.457V394.727V394.997V395.267V395.54V395.81V396.083V396.353V396.627V396.9V397.177V397.45V397.723V398V398.277V398.55V398.827V399.107V399.383V399.66V399.94V400.22V400.497V400.777V401.057V401.337V401.62V401.9V402.183V402.463V402.747V403.03V403.313V403.597V403.88V404.163V404.45V404.733V405.02V405.307V405.593V405.877V406.167V406.453V406.74V407.027V407.317V407.603V407.893V408.18V408.47V408.76V409.05V409.34V409.63V409.92V410.213V410.503V410.797V411.087V411.38V411.67V411.963V412.257V412.55V412.843V413.137V413.43V413.723V414.017V414.31V414.607V414.9V415.197V415.49V415.787V416.08V416.377V416.673V416.97V417.263V417.56V417.857V418.153V418.45V418.747V419.043V419.34V419.64V419.937V420.233V420.53V420.83V421.127V421.423V421.723V422.02V422.32V422.617V422.913V423.213V423.513V423.81V424.11V424.407V424.707V425.007V425.303V425.603V425.9V426.2V426.5V426.797V427.097V427.397V427.693V427.993V428.293V428.593V428.89V429.19V429.49V429.787V430.087V430.387V430.683V430.983V431.28V431.58V431.877V432.177V432.477V432.773V433.073V433.37V433.667V433.967V434.263V434.563V434.86V435.157V435.453V435.753V436.05V436.347V436.643V436.94V437.237V437.533V437.83V438.127V438.423V438.72V439.013V439.31V439.607V439.9V440.197V440.49V440.787V441.08V441.377V441.67V441.963V442.257V442.55V442.843V443.137V443.43V443.723V444.017V444.307V444.6V444.89V445.183V445.473V445.763V446.053V446.343V446.633V446.923V447.213V447.503V447.793V448.08V448.37V448.657V448.943V449.233V449.52V449.807V450.09V450.377V450.663V450.95V451.233V451.517V451.803V452.087V452.37V452.653V452.937V453.217V453.5V453.78V454.063V454.343V454.623V454.903V455.183V455.463V455.74V456.02V456.297V456.573V456.85V457.127V457.403V457.68V457.953V458.23V458.503V458.777V459.05V459.323V459.597V459.867V460.14V460.41V460.68V460.95V461.22V461.487V461.757V462.023V462.29V462.557V462.823V463.09V463.353V463.617V463.883V464.147V464.407V464.67V464.933V465.193V465.453V465.713V465.973V466.23V466.49V466.747V467.003V467.26V467.517V467.77V468.027V468.28V468.533V468.783V469.037V469.287V469.537V469.787V470.037V470.287V470.533V470.78V471.027V471.273V471.517V471.763V472.007V472.25V472.49V472.733V472.973V473.213V473.453V473.693V473.93V474.167V474.403V474.64V474.873V475.107V475.34V475.573V475.807V476.037V476.267V476.497V476.727V476.953V477.18V477.407V477.633V477.857V478.08V478.303V478.527V478.75V478.97V479.19V479.407V479.627V479.843V480.06V480.273V480.49V480.703V480.917V481.127V481.34V481.55V481.76V481.967V482.173V482.38V482.587V482.793V482.997V483.2V483.4V483.603V483.803V484V484.2V484.397V484.593V484.79V484.983V485.177V485.37V485.56V485.75V485.94V486.13V486.317V486.503V486.69V486.873V487.057V487.24V487.42V487.603V487.78V487.96V488.137V488.313V488.49V488.663V488.837V489.01V489.18V489.35V489.52V489.687V489.853V490.02V490.183V490.347V490.51V490.67V490.83V490.99V491.147V491.303V491.46V491.613V491.767V491.92V492.07V492.22V492.37V492.517V492.663V492.81V492.953V493.097V493.237V493.377V493.517V493.657V493.793V493.927V494.063V494.197V494.327V494.46V494.59V494.717V494.843V494.97V495.093V495.217V495.34V495.46V495.58V495.7V495.817V495.933V496.047V496.16V496.273V496.383V496.493V496.6V496.707V496.813V496.917V497.02V497.12V497.22V497.32V497.417V497.513V497.61V497.703V497.793V497.883V497.973V498.063V498.15V498.233V498.317V498.4V498.48V498.56V498.64V498.717V498.793V498.867V498.937V499.01V499.08V499.147V499.213V499.28V499.343V499.407V499.467V499.527V499.587V499.643V499.697V499.75V499.803V499.853V499.903V499.95V499.997V500.043V500.087V500.127V500.167V500.207V500.243V500.28V500.313V500.377V500.433V500.487V500.53V500.57V500.613V500.653C534 519.063 519.077 534 500.667 534C482.257 534 467.333 519.077 467.333 500.667V500.627V500.587V500.55V500.51V500.46V500.407V500.347V500.28V500.243V500.207V500.167V500.127V500.087V500.043V499.997V499.95V499.903V499.853V499.803V499.75V499.697V499.643V499.587V499.527V499.467V499.407V499.343V499.28V499.213V499.147V499.08V499.01V498.937V498.867V498.793V498.717V498.64V498.56V498.48V498.4V498.317V498.233V498.15V498.063V497.973V497.883V497.793V497.703V497.61V497.513V497.417V497.32V497.22V497.12V497.02V496.917V496.813V496.707V496.6V496.493V496.383V496.273V496.16V496.047V495.933V495.817V495.7V495.58V495.46V495.34V495.217V495.093V494.97V494.843V494.717V494.59V494.46V494.327V494.197V494.063V493.927V493.793V493.657V493.517V493.377V493.237V493.097V492.953V492.81V492.663V492.517V492.37V492.22V492.07V491.92V491.767V491.613V491.46V491.303V491.147V490.99V490.83V490.67V490.51V490.347V490.183V490.02V489.853V489.687V489.52V489.35V489.18V489.01V488.837V488.663V488.49V488.313V488.137V487.96V487.78V487.603V487.42V487.24V487.057V486.873V486.69V486.503V486.317V486.13V485.94V485.75V485.56V485.37V485.177V484.983V484.79V484.593V484.397V484.2V484V483.803V483.603V483.4V483.2V482.997V482.793V482.587V482.38V482.173V481.967V481.76V481.55V481.34V481.127V480.917V480.703V480.49V480.273V480.06V479.843V479.627V479.407V479.19V478.97V478.75V478.527V478.303V478.08V477.857V477.633V477.407V477.18V476.953V476.727V476.497V476.267V476.037V475.807V475.573V475.34V475.107V474.873V474.64V474.403V474.167V473.93V473.693V473.453V473.213V472.973V472.733V472.49V472.25V472.007V471.763V471.517V471.273V471.027V470.78V470.533V470.287V470.037V469.787V469.537V469.287V469.037V468.783V468.533V468.28V468.027V467.77V467.517V467.26V467.003V466.747V466.49V466.23V465.973V465.713V465.453V465.193V464.933V464.67V464.407V464.147V463.883V463.617V463.353V463.09V462.823V462.557V462.29V462.023V461.757V461.487V461.22V460.95V460.68V460.41V460.14V459.867V459.597V459.323V459.05V458.777V458.503V458.23V457.953V457.68V457.403V457.127V456.85V456.573V456.297V456.02V455.74V455.463V455.183V454.903V454.623V454.343V454.063V453.78V453.5V453.217V452.937V452.653V452.37V452.087V451.803V451.517V451.233V450.95V450.663V450.377V450.09V449.807V449.52V449.233V448.943V448.657V448.37V448.08V447.793V447.503V447.213V446.923V446.633V446.343V446.053V445.763V445.473V445.183V444.89V444.6V444.307V444.017V443.723V443.43V443.137V442.843V442.55V442.257V441.963V441.67V441.377V441.08V440.787V440.49V440.197V439.9V439.607V439.31V439.013V438.72V438.423V438.127V437.83V437.533V437.237V436.94V436.643V436.347V436.05V435.753V435.453V435.157V434.86V434.563V434.263V433.967V433.667V433.37V433.073V432.773V432.477V432.177V431.877V431.58V431.28V430.983V430.683V430.387V430.087V429.787V429.49V429.19V428.89V428.593V428.293V427.993V427.693V427.397V427.097V426.797V426.5V426.2V425.9V425.603V425.303V425.007V424.707V424.407V424.11V423.81V423.513V423.213V422.913V422.617V422.32V422.02V421.723V421.423V421.127V420.83V420.53V420.233V419.937V419.64V419.34V419.043V418.747V418.45V418.153V417.857V417.56V417.263V416.97V416.673V416.377V416.08V415.787V415.49V415.197V414.9V414.607V414.31V414.017V413.723V413.43V413.137V412.843V412.55V412.257V411.963V411.67V411.38V411.087V410.797V410.503V410.213V409.92V409.63V409.34V409.05V408.76V408.47V408.18V407.893V407.603V407.317V407.027V406.74V406.453V406.167V405.877V405.593V405.307V405.02V404.733V404.45V404.163V403.88V403.597V403.313V403.03V402.747V402.463V402.183V401.9V401.62V401.337V401.057V400.777V400.497V400.22V399.94V399.66V399.383V399.107V398.827V398.55V398.277V398V397.723V397.45V397.177V396.9V396.627V396.353V396.083V395.81V395.54V395.267V394.997V394.727V394.457V394.19V393.92V393.653V393.383V393.117V392.85V392.587V392.32V392.057V391.793V391.527V391.267V391.003V390.74V390.48V390.22V389.96V389.7V389.44V389.183V388.923V388.667V388.41V388.153V387.9V387.643V387.39V387.137V386.883V386.633V386.38C467.333 360.773 445.353 334 417.333 334C399.863 334 380.58 343.497 367.333 366.103V366.193V366.537V366.88V367.223V367.57V367.913V368.26V368.607V368.957V369.303V369.65V370V370.35V370.7V371.05V371.4V371.753V372.107V372.457V372.81V373.163V373.517V373.873V374.227V374.583V374.94V375.293V375.653V376.01V376.367V376.723V377.083V377.443V377.8V378.16V378.52V378.88V379.243V379.603V379.967V380.327V380.69V381.053V381.417V381.78V382.143V382.507V382.873V383.237V383.603V383.967V384.333V384.7V385.067V385.433V385.8V386.167V386.537V386.903V387.27V387.64V388.01V388.377V388.747V389.117V389.487V389.857V390.227V390.597V390.967V391.34V391.71V392.08V392.453V392.823V393.197V393.57V393.94V394.313V394.687V395.06V395.43V395.803V396.177V396.55V396.927V397.3V397.673V398.047V398.42V398.793V399.17V399.543V399.917V400.293V400.667V401.043V401.417V401.793V402.167V402.54V402.917V403.293V403.667V404.043V404.417V404.793V405.167V405.543V405.92V406.293V406.67V407.043V407.42V407.797V408.17V408.547V408.92V409.297V409.67V410.047V410.42V410.797V411.17V411.547V411.92V412.297V412.67V413.047V413.42V413.793V414.167V414.543V414.917V415.29V415.663V416.037V416.41V416.783V417.157V417.53V417.903V418.277V418.65V419.02V419.393V419.767V420.137V420.51V420.88V421.253V421.623V421.993V422.363V422.733V423.107V423.477V423.843V424.213V424.583V424.953V425.32V425.69V426.057V426.427V426.793V427.16V427.527V427.893V428.26V428.627V428.993V429.357V429.723V430.087V430.453V430.817V431.18V431.543V431.907V432.27V432.63V432.993V433.353V433.717V434.077V434.437V434.797V435.157V435.517V435.873V436.233V436.59V436.947V437.303V437.66V438.017V438.373V438.73V439.083V439.437V439.79V440.143V440.497V440.85V441.203V441.553V441.903V442.253V442.603V442.953V443.303V443.65V443.997V444.347V444.693V445.037V445.383V445.73V446.073V446.417V446.76V447.103V447.443V447.787V448.127V448.467V448.807V449.147V449.483V449.823V450.16V450.497V450.83V451.167V451.5V451.833V452.167V452.5V452.833V453.163V453.493V453.823V454.153V454.48V454.81V455.137V455.463V455.787V456.113V456.437V456.76V457.083V457.403V457.727V458.047V458.367V458.683V459.003V459.32V459.637V459.953V460.267V460.58V460.893V461.207V461.52V461.83V462.14V462.447V462.757V463.063V463.37V463.677V463.98V464.287V464.59V464.89V465.193V465.493V465.793V466.09V466.39V466.687V466.983V467.277V467.57V467.863V468.157V468.447V468.737V469.027V469.317V469.603V469.89V470.177V470.46V470.743V471.027V471.31V471.59V471.87V472.147V472.423V472.7V472.977V473.253V473.527V473.797V474.07V474.34V474.61V474.877V475.143V475.41V475.677V475.94V476.203V476.463V476.723V476.983V477.243V477.5V477.757V478.01V478.267V478.52V478.77V479.02V479.27V479.52V479.767V480.01V480.257V480.5V480.743V480.983V481.223V481.463V481.7V481.937V482.17V482.407V482.637V482.87V483.1V483.33V483.557V483.783V484.007V484.233V484.457V484.677V484.897V485.117V485.333V485.55V485.763V485.977V486.19V486.403V486.61V486.82V487.027V487.233V487.437V487.64V487.843V488.043V488.24V488.44V488.637V488.83V489.023V489.217V489.407V489.597V489.783V489.97V490.157V490.34V490.52V490.703V490.88V491.06V491.237V491.41V491.583V491.757V491.927V492.097V492.263V492.43V492.593V492.757V492.92V493.08V493.24V493.397V493.55V493.707V493.857V494.01V494.16V494.307V494.453V494.597V494.74V494.883V495.023V495.16V495.3V495.433V495.567V495.7V495.83V495.96V496.087V496.213V496.337V496.46V496.58V496.7V496.817V496.933V497.047V497.16V497.27V497.38V497.487V497.593V497.697V497.8V497.9V498V498.097V498.193V498.287V498.377V498.47V498.557V498.643V498.73V498.813V498.893V498.973V499.053V499.13V499.203V499.277V499.347V499.417V499.483V499.55V499.613V499.677V499.737V499.793V499.85V499.903V499.957V500.01V500.057V500.103V500.15V500.193V500.237V500.277V500.313V500.35V500.383V500.447V500.5V500.547V500.587V500.63V500.663C367.333 519.073 352.41 534 334 534C315.59 534 300.667 519.077 300.667 500.667V500.63V500.587V500.547V500.5V500.447V500.383V500.35V500.313V500.277V500.237V500.193V500.15V500.103V500.057V500.01V499.957V499.903V499.85V499.793V499.737V499.677V499.613V499.55V499.483V499.417V499.347V499.277V499.203V499.13V499.053V498.973V498.893V498.813V498.73V498.643V498.557V498.47V498.377V498.287V498.193V498.097V498V497.9V497.8V497.697V497.593V497.487V497.38V497.27V497.16V497.047V496.933V496.817V496.7V496.58V496.46V496.337V496.213V496.087V495.96V495.83V495.7V495.567V495.433V495.3V495.16V495.023V494.883V494.74V494.597V494.453V494.307V494.16V494.01V493.857V493.707V493.55V493.397V493.24V493.08V492.92V492.757V492.593V492.43V492.263V492.097V491.927V491.757V491.583V491.41V491.237V491.06V490.88V490.703V490.52V490.34V490.157V489.97V489.783V489.597V489.407V489.217V489.023V488.83V488.637V488.44V488.24V488.043V487.843V487.64V487.437V487.233V487.027V486.82V486.61V486.403V486.19V485.977V485.763V485.55V485.333V485.117V484.897V484.677V484.457V484.233V484.007V483.783V483.557V483.33V483.1V482.87V482.637V482.407V482.17V481.937V481.7V481.463V481.223V480.983V480.743V480.5V480.257V480.01V479.767V479.52V479.27V479.02V478.77V478.52V478.267V478.01V477.757V477.5V477.243V476.983V476.723V476.463V476.203V475.94V475.677V475.41V475.143V474.877V474.61V474.34V474.07V473.797V473.527V473.253V472.977V472.7V472.423V472.147V471.87V471.59V471.31V471.027V470.743V470.46V470.177V469.89V469.603V469.317V469.027V468.737V468.447V468.157V467.863V467.57V467.277V466.983V466.687V466.39V466.09V465.793V465.493V465.193V464.89V464.59V464.287V463.98V463.677V463.37V463.063V462.757V462.447V462.14V461.83V461.52V461.207V460.893V460.58V460.267V459.953V459.637V459.32V459.003V458.683V458.367V458.047V457.727V457.403V457.083V456.76V456.437V456.113V455.787V455.463V455.137V454.81V454.48V454.153V453.823V453.493V453.163V452.833V452.5V452.167V451.833V451.5V451.167V450.83V450.497V450.16V449.823V449.483V449.147V448.807V448.467V448.127V447.787V447.443V447.103V446.76V446.417V446.073V445.73V445.383V445.037V444.693V444.347V443.997V443.65V443.303V442.953V442.603V442.253V441.903V441.553V441.203V440.85V440.497V440.143V439.79V439.437V439.083V438.73V438.373V438.017V437.66V437.303V436.947V436.59V436.233V435.873V435.517V435.157V434.797V434.437V434.077V433.717V433.353V432.993V432.63V432.27V431.907V431.543V431.18V430.817V430.453V430.087V429.723V429.357V428.993V428.627V428.26V427.893V427.527V427.16V426.793V426.427V426.057V425.69V425.32V424.953V424.583V424.213V423.843V423.477V423.107V422.733V422.363V421.993V421.623V421.253V420.88V420.51V420.137V419.767V419.393V419.02V418.65V418.277V417.903V417.53V417.157V416.783V416.41V416.037V415.663V415.29V414.917V414.543V414.167V413.793V413.42V413.047V412.67V412.297V411.92V411.547V411.17V410.797V410.42V410.047V409.67V409.297V408.92V408.547V408.17V407.797V407.42V407.043V406.67V406.293V405.92V405.543V405.167V404.793V404.417V404.043V403.667V403.293V402.917V402.54V402.167V401.793V401.417V401.043V400.667V400.293V399.917V399.543V399.17V398.793V398.42V398.047V397.673V397.3V396.927V396.55V396.177V395.803V395.43V395.06V394.687V394.313V393.94V393.57V393.197V392.823V392.453V392.08V391.71V391.34V390.967V390.597V390.227V389.857V389.487V389.117V388.747V388.377V388.01V387.64V387.27V386.903V386.537V386.167V385.8V385.433V385.067V384.7V384.333V383.967V383.603V383.237V382.873V382.507V382.143V381.78V381.417V381.053V380.69V380.327V379.967V379.603V379.243V378.88V378.52V378.16V377.8V377.443V377.083V376.723V376.367V376.01V375.653V375.293V374.94V374.583V374.227V373.873V373.517V373.163V372.81V372.457V372.107V371.753V371.4V371.05V370.7V370.35V370V369.65V369.303V368.957V368.607V368.26V367.913V367.57V367.223V366.88V366.537V366.193V365.85V365.507V365.163V364.823V364.483V364.143V363.803V363.467V363.127V362.79V362.453V362.117V361.783V361.447V361.113V360.78V360.447V360.113V359.783V359.453V359.123V358.793V358.463V358.137V357.81V357.68V357.547V357.417V357.283V357.153V357.02V356.887V356.753V356.62V356.487V356.353V356.22V356.087V355.953V355.817V355.683V355.547V355.41V355.277V355.14V355.003V354.867V354.73V354.593V354.457V354.32V354.183V354.043V353.907V353.767V353.63V353.49V353.35V353.213V353.073V352.933V352.793V352.653V352.513V352.373V352.233V352.09V351.95V351.81V351.667V351.527V351.383V351.243V351.1V350.957V350.817V350.673V350.53V350.387V350.243V350.1V349.957V349.813V349.67V349.523V349.38V349.237V349.093V348.947V348.803V348.657V348.513V348.367V348.22V348.077V347.93V347.783V347.64V347.493V347.347V347.2V347.053V346.907V346.76V346.613V346.467V346.32V346.173V346.023V345.877V345.73V345.583V345.433V345.287V345.14V344.99V344.843V344.693V344.547V344.397V344.25V344.1V343.953V343.803V343.653V343.507V343.357V343.207V343.06V342.91V342.76V342.61V342.463V342.313V342.163V342.013V341.863V341.713V341.567V341.417V341.267V341.117V340.967V340.817V340.667V340.517V340.367V340.217V340.067V339.917V339.767V339.617V339.467V339.317V339.167V339.017V338.867V338.717V338.567V338.417V338.267V338.117V337.967V337.817V337.667V337.517V337.363V337.213V337.063V336.913V336.763V336.613V336.463V336.313V336.163V336.013V335.867V335.717V335.567V335.417V335.267V335.117V334.967V334.817V334.667V334.517V334.37V334.22V334.07V333.92V333.773V333.623V333.473V333.323V333.177V333.027V332.877V332.73V332.58V332.433V332.283V332.137V331.987V331.84V331.69V331.543V331.397V331.247V331.1V330.953V330.803V330.657V330.51V330.363V330.217V330.07V329.923V329.777V329.63V329.483V329.337V329.19V329.043V328.9V328.753V328.607V328.46V328.317V328.17V328.027V327.88V327.737V327.59V327.447V327.303V327.16V327.013V326.87V326.727V326.583V326.44V326.297V326.153V326.01V325.87V325.727V325.583V325.443V325.3V325.157V325.017V324.877V324.733V324.593V324.453V324.313V324.173V324.03V323.89V323.753V323.613V323.473V323.333V323.197V323.057V322.917V322.78V322.643V322.503V322.367V322.23V322.093V321.957V321.82V321.683V321.547V321.41V321.277V321.14V321.003V320.87V320.737V320.6V320.467V320.333V320.2V320.067V319.933V319.8V319.667V319.537V319.403V319.273V319.14V319.01V318.88V318.747V318.617V318.487V318.36V318.23V318.1V317.97V317.843V317.713V317.587V317.46V317.333V317.207V317.08V316.953V316.827V316.7V316.577V316.45V316.327V316.203V316.077V315.953V315.83V315.707V315.587V315.463V315.34V315.22V315.097V314.977V314.857V314.737V314.617V314.497V314.377V314.26V314.14V314.023V313.903V313.787V313.67V313.553V313.437V313.323V313.207V313.093V312.977V312.863V312.75V312.637V312.523V312.41V312.297V312.187V312.073V311.963V311.853V311.743V311.633V311.523V311.413V311.307V311.197V311.09V310.983V310.877V310.77V310.663V310.557V310.453V310.347V310.243V310.14V310.037V309.933V309.83V309.73V309.627V309.527V309.427V309.327V309.227V309.127V309.027V308.93V308.83V308.733V308.637V308.54V308.443V308.35V308.253V308.16V308.063V307.97V307.877V307.787V307.693V307.603V307.51V307.42V307.33V307.24V307.15V307.063V306.973V306.887V306.8V306.713V306.627V306.543V306.457V306.373V306.29V306.207V306.123V306.04V305.96V305.877V305.797V305.717V305.637V305.557V305.48V305.4V305.323V305.247V305.17V305.097V305.02V304.947V304.87V304.797V304.723V304.653V304.58V304.51V304.44V304.37V304.3V304.23V304.163V304.093V304.027V303.96V303.897V303.83V303.767V303.7V303.637V303.577V303.513V303.45V303.39V303.33V303.27V303.21V303.153V303.093V303.037V302.98V302.923V302.87V302.813V302.76V302.707V302.653V302.6V302.55V302.5V302.45V302.4V302.35V302.3V302.253V302.207V302.16V302.113V302.07V302.027V301.98V301.94V301.897V301.853V301.813V301.773V301.733V301.693V301.657V301.62V301.583V301.547V301.51V301.477V301.44V301.407V301.343V301.283V301.223V301.167V301.113V301.063V301.017V300.97V300.93V300.89V300.84V300.807V300.767V300.733V300.693C300.667 282.283 315.59 267.333 334 267.333Z"
                    fill="#fff"
                  />
                </svg>

                <svg
                  viewBox="0 0 610 608"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M305 579C246.033 579 203.6 578.971 170.517 575.763C137.812 572.592 116.892 566.5 100.196 556.008C81.1136 544.02 64.9779 527.885 52.9875 508.804C42.5 492.108 36.4042 471.187 33.2375 438.483C30.0292 405.4 30 362.967 30 304C30 245.033 30.0292 202.6 33.2375 169.517C36.4042 136.812 42.5 115.892 52.9875 99.1958C64.9774 80.1131 81.1131 63.9774 100.196 51.9875C116.892 41.5 137.812 35.4042 170.517 32.2375C203.596 29.0292 246.029 29 305 29C363.967 29 406.4 29.0292 439.483 32.2375C472.187 35.4042 493.108 41.5 509.804 51.9875C528.885 63.9779 545.02 80.1136 557.008 99.1958C567.5 115.892 573.592 136.812 576.763 169.517C579.971 202.6 580 245.033 580 304C580 362.967 579.971 405.4 576.763 438.483C573.592 471.187 567.5 492.108 557.008 508.804C545.019 527.885 528.885 544.019 509.804 556.008C493.108 566.5 472.187 572.592 439.483 575.763C406.4 578.971 363.967 579 305 579Z"
                    stroke="#fff"
                    stroke-width="50"
                  />
                  <path
                    d="M305 429C374.036 429 430 373.036 430 304C430 234.964 374.036 179 305 179C235.964 179 180 234.964 180 304C180 373.036 235.964 429 305 429Z"
                    stroke="#fff"
                    stroke-width="50"
                  />
                  <path
                    d="M467.5 179C488.211 179 505 162.211 505 141.5C505 120.789 488.211 104 467.5 104C446.789 104 430 120.789 430 141.5C430 162.211 446.789 179 467.5 179Z"
                    fill="#fff"
                  />
                </svg>

                {/* <svg
                  viewBox="0 0 30 25"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M27.268 3.25415L24.3891 5.61891C19.963 9.25464 17.75 11.0725 15 11.0725C12.2499 11.0725 10.0369 9.25464 5.61076 5.61891L2.73193 3.25415"
                    stroke="white"
                    stroke-width="2"
                  />
                  <path
                    d="M22.3608 1H7.63916C3.97246 1 1 3.44166 1 6.45361V18.5464C1 21.5583 3.97246 24 7.63916 24H22.3608C26.0275 24 29 21.5583 29 18.5464V6.45361C29 3.44166 26.0275 1 22.3608 1Z"
                    stroke="white"
                    stroke-width="2"
                  />
                </svg> */}
              </div>
            </div>
          </div>
          <div className="flex flex-row justify-end opacity-65 pt-10 md:pt-0">
            <p className="text-white text-right [&_svg]:w-4 [&_svg]:mr-1 flex flex-row items-center">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12Z"
                  stroke="currentColor"
                  stroke-width="1.5"
                />
                <path
                  d="M14 15.6672C13.475 15.8812 12.8952 16 12.2857 16C9.91878 16 8 14.2091 8 12C8 9.79086 9.91878 8 12.2857 8C12.8952 8 13.475 8.11876 14 8.33283"
                  stroke="currentColor"
                  stroke-width="1.5"
                  stroke-linecap="round"
                />
              </svg>{" "}
              copyright {year}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;

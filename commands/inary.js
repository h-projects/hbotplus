exports.help = "Translates your text into Inary and back.";
exports.usage = "encode/decode [text]";
exports.category = 0;
exports.run = (client, msg, args) => {
  let result = "Syntax error! You must specify if you want to decode/encode text, and qive hbot+ text to work with. Example: h+inary encode h";

  if(args[0] == "encode")
  {
    let parseInput = msg.content.replace("h+inary " + args[0] + " ", "");

    parseInput = parseInput.split("");
    parseInput = parseInput.map((n) => n.charCodeAt(0));
    parseInput = parseInput.map((n) => n.toString(2)); // Number.prototype.toString() accepts a "base" argument, or what base to convert the number to.
    parseInput = parseInput.map((n) => n.split(""));

    parseInput = parseInput.map(function (n) {
      while (n.length < 8) {
        n.unshift("0");
      }
      return n;
    });

    parseInput = parseInput.map((n) =>
      n.map(function (a) {
        return ["h", "H"][parseInt(a)];
      })
    );

    parseInput = parseInput.map((n) => n.join(""));
    parseInput = parseInput.join(" ");
    result = parseInput;
  }
  else if (args[0] == "decode")
  {
    let parseInput = msg.content.replace("h+inary " + args[0] + " ", "");

    parseInput = parseInput.split(" ");
    parseInput = parseInput.map((n) => n.split(""));

    parseInput = parseInput.map((n) =>
      n.map(function (a) {
      return ["h", "H"].indexOf(a);
      })
    );

    parseInput = parseInput.map((n) => n.join(""));
    parseInput = parseInput.map((n) => parseInt(n, 2)); // parseInt(n, b) parses the integer (n) as if it were in base (b)
    parseInput = parseInput.map((n) => String.fromCharCode(n));
    parseInput = parseInput.join("");

    result = parseInput;
  }

	msg.channel.send({
		embed: {
			color: parseInt(client.confiq.embedColor),
      title: "Here's your converted text:",
			description: result,
			footer: {
				text: `Command requested by ${msg.author.tag} - ${client.confiq.footers[Math.floor(Math.random() * client.confiq.footers.length)]}`,
				icon_url: client.confiq.pfpurl
			}
		}
	})
}
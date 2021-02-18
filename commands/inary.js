exports.run = (client, message, args) => {
	//if (args.join(" ")) return;
  
  let result = "Syntax error! You must specify if you want to decode/encode text, and give HBot+ text to work with. Example: h+inary encode h";

  if(args[0] == "encode")
  {
    let parseInput = message.content.replace("h+inary " + args[0] + " ", "");

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
    let parseInput = message.content.replace("h+inary " + args[0] + " ", "");

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

	message.channel.send({
		embed: {
			color: 0xff1d00,
			title: result,
			footer: {
				text: `hBot - ${client.confiq.footers[Math.floor(Math.random() * client.confiq.footers.length)]}`,
				icon_url: 'https://i.imgur.com/chJ9A5N.png'
			}
		}
	})
}
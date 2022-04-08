import 'package:flutter/cupertino.dart';
import 'package:flutter/material.dart';
import 'package:hackathon/constants.dart';

class HomeScreen extends StatelessWidget {
  const HomeScreen({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: buildAppBar(),
      bottomNavigationBar: Container(
        height: 80,
        decoration: BoxDecoration(color: Colors.white, boxShadow: [
          BoxShadow(
            offset: Offset(0, -10),
            blurRadius: 35,
            color: Colors.grey.withOpacity(0.38),
          )
        ]),
        child: Row(
          mainAxisAlignment: MainAxisAlignment.spaceAround,
          children: <Widget>[
            IconButton(onPressed: null, icon: Icon(Icons.arrow_left)),
            IconButton(onPressed: null, icon: Icon(Icons.home)),
            IconButton(onPressed: null, icon: Icon(Icons.arrow_right)),
          ],
        ),
      ),
    );
  }

  AppBar buildAppBar() {
    return AppBar(
      backgroundColor: kPrimaryColor,
      elevation: 0,
      leading: IconButton(
        icon: Icon(Icons.menu),
        onPressed: () {},
      ),
    );
  }
}

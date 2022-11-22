#include <Servo.h>
Servo myservo;      //서보 라이브러리
// the setup function runs once when you press reset or power the board
void setup() {
  // initialize digital pin LED_BUILTIN as an output.

  Serial.begin(9600); // Begen listening on port 9600 for serial
  myservo.attach(6); //서보 시작
  myservo.write(0); //초기 서보 모터를 0도로 위치 시
}

// the loop function runs over and over again forever
void loop() {

   if(Serial.available() > 0) // Read from serial port
    {
      char ReaderFromNode; // Store current character
      ReaderFromNode = (char) Serial.read();
      convertToState(ReaderFromNode); // Convert character to state  
    }
  delay(1000); 
}

void convertToState(char chr) {
  if(chr=='o'){
    myservo.write(179);
    delay(2000);
    myservo.write(0);

  }
  if(chr=='f'){
    myservo.write(0);
  }
}

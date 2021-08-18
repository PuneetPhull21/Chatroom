#include <iostream>
using namespace std;

int main(){
    int testcase,i,j,z;
    int hostedyear[5] = {2010, 2015, 2016, 2017,2019};
    cout << "Enter the test case " << endl;
    cin >> testcase; 
      int enteryear[testcase]  = {} ;
    for (i =0;i<testcase;i++){
       for (j=0;j<testcase;j++){
           cin >> enteryear[j];
       }
       for(z=0;z<5;z++){
           if(hostedyear[z] == enteryear[i] ){
               cout << "HOSTED";
           }
           else{
             cout << "NOT HOSTED";
           }
       }
    }
    return 0;
}


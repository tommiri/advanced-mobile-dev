package com.example.hellocompose

import android.os.Bundle
import androidx.activity.ComponentActivity
import androidx.activity.compose.setContent
import androidx.compose.foundation.background
import androidx.compose.foundation.layout.Arrangement
import androidx.compose.foundation.layout.Column
import androidx.compose.foundation.layout.Row
import androidx.compose.foundation.layout.Spacer
import androidx.compose.foundation.layout.fillMaxSize
import androidx.compose.foundation.layout.fillMaxWidth
import androidx.compose.foundation.layout.height
import androidx.compose.foundation.layout.padding
import androidx.compose.foundation.layout.size
import androidx.compose.material3.Button
import androidx.compose.material3.Text
import androidx.compose.runtime.Composable
import androidx.compose.ui.Alignment
import androidx.compose.ui.Modifier
import androidx.compose.ui.graphics.Color
import androidx.compose.ui.text.style.TextAlign
import androidx.compose.ui.tooling.preview.Preview
import androidx.compose.ui.unit.dp
import androidx.compose.ui.unit.sp
import coil.compose.AsyncImage

class MainActivity : ComponentActivity() {
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContent {
            HelloWorldUI()
        }
    }
}

@Preview
@Composable
fun HelloWorldUI() {
    Column(
        modifier = Modifier
            .fillMaxSize()
            .background(Color.White)
            .padding(16.dp),
        horizontalAlignment = Alignment.CenterHorizontally,
    ) {
        Text(
            text = "Tampere",
            fontSize = 60.sp,
            modifier = Modifier
                .background(Color.LightGray)
                .fillMaxWidth()
                .padding(8.dp),
            textAlign = TextAlign.Center
        )
        Row(
            modifier = Modifier
                .fillMaxWidth(),
            horizontalArrangement = Arrangement.SpaceAround,
            verticalAlignment = Alignment.CenterVertically
        ) {
            AsyncImage(
                model = "https://openweathermap.org/img/wn/01d@4x.png",
                contentDescription = "Icon indicating sunny weather",
                modifier = Modifier.size(125.dp),
            )
            Text(text = "20°C", fontSize = 40.sp)
        }
        Text(text = "Sunny", fontSize = 24.sp, modifier = Modifier.padding(vertical = 8.dp))
        Text(text = "5 m/s Northeast", fontSize = 24.sp)
        Spacer(modifier = Modifier.weight(1f))
        Button(
            onClick = { /*TODO*/ }, modifier = Modifier
                .fillMaxWidth()
        ) {
            Text(text = "Update weather", fontSize = 24.sp, modifier = Modifier.padding(8.dp))
        }
    }
}